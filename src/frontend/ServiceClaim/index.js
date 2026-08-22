import React, { useState, useEffect, useRef, memo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import styled from "styled-components";
import toast from "react-hot-toast";
import BreadCrumBox from "../../components/common/BreadCrumbBox";

const API_BASE = (() => {
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    return "http://localhost:3000/api";
  }
  return `${process.env.REACT_APP_BACKEND_URL || "https://sigma-backend-s4pg.onrender.com"}/api`;
})();

const ISSUE_TYPES = ["Damaged", "Not Working", "Missing Part", "Other"];
const ACCEPTED_MIME = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILES = 10;
const MAX_SIZE_MB = 5;

// ─── Styled Components ────────────────────────────────────────────────────────

const ClaimSection = styled.section`
  padding: 60px 0 80px;
  background-color: #faf9fc;
  min-height: 70vh;
`;

const ClaimCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #edeaf2;

  @media (max-width: 768px) {
    padding: 24px 18px;
  }
`;

const InfoBox = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #edeaf2;
  margin-bottom: 24px;

  h4 {
    color: ${(props) => props.theme.primary || "#6d28d9"};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: #64748b;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 12px;
  }

  .step-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 14px;

    .step-num {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: #f3f0ff;
      color: #6d28d9;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .step-text {
      font-size: 13px;
      color: #475569;
      line-height: 1.5;
    }
  }
`;

const SectionHeading = styled.div`
  margin-bottom: 28px;

  h2 {
    font-size: 26px;
    font-weight: 800;
    color: #1e1b4b;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #64748b;
    margin: 0;
  }
`;

const ModeToggleGroup = styled.div`
  display: flex;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 14px;
  gap: 4px;

  button {
    flex: 1;
    border: none;
    background: transparent;
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 6px;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: #ffffff;
      color: #6d28d9;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }
  }
`;

const StyledForm = styled(Form)`
  .form-label {
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
  }

  .form-control,
  .form-select {
    padding: 12px 16px;
    font-size: 14px;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    background-color: #fff;
    color: #1e293b;
    transition: all 0.2s ease;

    &:focus {
      border-color: #6d28d9;
      box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
      outline: none;
    }
  }

  textarea.form-control {
    min-height: 110px;
    resize: vertical;
  }
`;

const UploadDropzone = styled.div`
  border: 2px dashed #c4b5fd;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  background: ${(props) => (props.$isDragging ? "#f3e8ff" : "#faf5ff")};
  transition: all 0.2s ease;

  &:hover {
    background: #f3e8ff;
    border-color: #7c3aed;
  }

  .icon-wrapper {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: #ede9fe;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
    color: #6d28d9;
  }

  .title {
    color: #6d28d9;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .sub {
    color: #94a3b8;
    font-size: 12px;
    margin: 0;
  }
`;

const ThumbnailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  gap: 10px;
  margin-top: 14px;

  .thumb {
    position: relative;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e7eb;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 2px;
      right: 2px;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-size: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
  }
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.primary || "linear-gradient(135deg, #6d28d9, #4f46e5)"};
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;

  &:hover:not(:disabled) {
    opacity: 0.92;
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(109, 40, 217, 0.3);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const SuccessCard = styled.div`
  text-align: center;
  padding: 20px 0;

  .badge-icon {
    width: 70px;
    height: 70px;
    background: #f0fdf4;
    color: #16a34a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    border: 2px solid #bbf7d0;
  }

  h3 {
    font-size: 24px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 8px;
  }

  p {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .ticket-box {
    background: #fdf4ff;
    border: 1.5px dashed #d946ef;
    border-radius: 12px;
    padding: 20px;
    margin: 0 auto 28px;
    max-width: 400px;

    .num-title {
      font-size: 12px;
      font-weight: 700;
      color: #a21caf;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }

    .num-val {
      font-size: 32px;
      font-weight: 900;
      color: #6d28d9;
      margin: 0;
      letter-spacing: 0.04em;
    }
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const ServiceClaim = memo(() => {
  const { productSlug } = useParams();

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [entryMode, setEntryMode] = useState("select"); // "select" or "manual"
  const [selectedProductId, setSelectedProductId] = useState("");
  const [customProductName, setCustomProductName] = useState("");
  const [customIssueType, setCustomIssueType] = useState("");

  const [form, setForm] = useState({
    issueType: "",
    description: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef();

  // Fetch product list
  useEffect(() => {
    setLoadingProducts(true);
    axios
      .get(`${API_BASE}/tickets/products`)
      .then((res) => {
        const list = res.data?.data || [];
        setProducts(list);

        // Pre-select if URL slug provided
        if (productSlug) {
          const match = list.find((p) => p.slug === productSlug);
          if (match) {
            setSelectedProductId(String(match.id));
            setEntryMode("select");
          } else {
            setCustomProductName(productSlug.replace(/-/g, " "));
            setEntryMode("manual");
          }
        }
      })
      .catch(() => {
        setEntryMode("manual");
      })
      .finally(() => {
        setLoadingProducts(false);
      });
  }, [productSlug]);

  const validateFiles = (incoming) => {
    const valid = [];
    const errs = [];
    for (const f of incoming) {
      if (!ACCEPTED_MIME.includes(f.type)) {
        errs.push(`${f.name}: only JPG, PNG, WebP supported`);
        continue;
      }
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        errs.push(`${f.name}: exceeds ${MAX_SIZE_MB}MB`);
        continue;
      }
      valid.push(f);
    }
    return { valid, errs };
  };

  const handleFileChange = (incoming) => {
    const totalCount = files.length + incoming.length;
    if (totalCount > MAX_FILES) {
      toast.error(`Maximum ${MAX_FILES} images allowed`);
      return;
    }
    const { valid, errs } = validateFiles(Array.from(incoming));
    if (errs.length > 0) {
      errs.forEach((msg) => toast.error(msg));
    }
    setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const validate = () => {
    const errs = {};
    if (entryMode === "select" && !selectedProductId) {
      errs.product = "Please select a product from the list";
    }
    if (entryMode === "manual" && !customProductName.trim()) {
      errs.product = "Please enter the product name or model";
    }
    if (!form.customerName.trim()) errs.customerName = "Name is required";
    if (!form.customerEmail.trim() || !/^\S+@\S+\.\S+$/.test(form.customerEmail)) {
      errs.customerEmail = "Valid email is required";
    }
    if (!form.customerPhone.trim()) errs.customerPhone = "Phone number is required";
    if (!form.issueType) {
      errs.issueType = "Please select an issue type";
    } else if (form.issueType === "Other" && !customIssueType.trim()) {
      errs.customIssue = "Please specify your issue";
    }
    if (!form.description.trim() || form.description.trim().length < 10) {
      errs.description = "Please describe the issue (minimum 10 characters)";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const fd = new FormData();
      if (entryMode === "select" && selectedProductId) {
        fd.append("productId", selectedProductId);
      }
      if (entryMode === "manual" && customProductName.trim()) {
        fd.append("productName", customProductName.trim());
      }

      const resolvedIssueType = form.issueType === "Other" && customIssueType.trim()
        ? `Other: ${customIssueType.trim()}`
        : form.issueType;

      fd.append("customerName", form.customerName.trim());
      fd.append("customerEmail", form.customerEmail.trim());
      fd.append("customerPhone", form.customerPhone.trim());
      fd.append("issueType", resolvedIssueType);
      fd.append("description", form.description.trim());

      files.forEach((file) => fd.append("images", file));

      const res = await axios.post(`${API_BASE}/tickets`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.result === "success") {
        setSuccessTicket(res.data.data.ticketNumber);
        toast.success("Service request submitted successfully!");
      } else {
        toast.error(res.data.message || "Failed to submit request.");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSuccessTicket(null);
    setSelectedProductId("");
    setCustomProductName("");
    setCustomIssueType("");
    setEntryMode("select");
    setForm({
      issueType: "",
      description: "",
      customerName: "",
      customerPhone: "",
      customerEmail: "",
    });
    setFiles([]);
  };

  return (
    <>
      <BreadCrumBox title="Product Service Request" />

      <ClaimSection>
        <Container>
          <Row className="justify-content-center">
            {/* Left/Main Form Column */}
            <Col lg={8}>
              <ClaimCard>
                {successTicket ? (
                  <SuccessCard>
                    <div className="badge-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3>Service Request Submitted Successfully</h3>
                    <p>
                      Your service request has been logged in our system. Our technical support team has been notified and will review your request shortly.
                    </p>

                    <div className="ticket-box">
                      <div className="num-title">Your Ticket Number</div>
                      <div className="num-val">{successTicket}</div>
                    </div>

                    <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                      Please keep this ticket number safe for all future updates. A confirmation has also been sent to your email.
                    </p>

                    <SubmitButton type="button" onClick={resetForm} style={{ maxWidth: "260px", margin: "20px auto 0" }}>
                      Submit Another Request
                    </SubmitButton>
                  </SuccessCard>
                ) : (
                  <>
                    <SectionHeading>
                      <h2>Submit a Service Request</h2>
                      <p>If you received a damaged, defective, or incomplete item, please submit your request below for fast resolution.</p>
                    </SectionHeading>

                    <StyledForm onSubmit={handleSubmit} noValidate>
                      {/* Product Selection Mode Toggle (Right at Top) */}
                      <Row className="mb-3">
                        <Col md={12}>
                          <Form.Label className="form-label">
                            Product Details <span className="text-danger">*</span>
                          </Form.Label>
                          <ModeToggleGroup>
                            <button
                              type="button"
                              className={entryMode === "select" ? "active" : ""}
                              onClick={() => {
                                setEntryMode("select");
                                setErrors((e) => ({ ...e, product: undefined }));
                              }}
                            >
                              Select from Catalogue
                            </button>
                            <button
                              type="button"
                              className={entryMode === "manual" ? "active" : ""}
                              onClick={() => {
                                setEntryMode("manual");
                                setErrors((e) => ({ ...e, product: undefined }));
                              }}
                            >
                              Enter Product Manually
                            </button>
                          </ModeToggleGroup>

                          {entryMode === "select" ? (
                            <Form.Group>
                              <Form.Select
                                value={selectedProductId}
                                onChange={(e) => {
                                  setSelectedProductId(e.target.value);
                                  setErrors((err) => ({ ...err, product: undefined }));
                                }}
                                disabled={loadingProducts}
                                isInvalid={!!errors.product}
                              >
                                <option value="">— Select from product catalogue ({products.length} products) —</option>
                                {products.map((p) => (
                                  <option key={p.id} value={p.id}>
                                    {p.title}
                                  </option>
                                ))}
                              </Form.Select>
                              {errors.product && <div className="text-danger mt-1 small">{errors.product}</div>}
                            </Form.Group>
                          ) : (
                            <Form.Group>
                              <Form.Control
                                type="text"
                                placeholder="Enter product name, model number, or description..."
                                value={customProductName}
                                onChange={(e) => {
                                  setCustomProductName(e.target.value);
                                  setErrors((err) => ({ ...err, product: undefined }));
                                }}
                                isInvalid={!!errors.product}
                              />
                              {errors.product && <div className="text-danger mt-1 small">{errors.product}</div>}
                            </Form.Group>
                          )}
                        </Col>
                      </Row>

                      {/* Issue Type */}
                      <Row className="mb-3">
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label className="form-label">
                              Issue Type <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              value={form.issueType}
                              onChange={(e) => {
                                setForm({ ...form, issueType: e.target.value });
                                setErrors((err) => ({ ...err, issueType: undefined, customIssue: undefined }));
                              }}
                              isInvalid={!!errors.issueType}
                              required
                            >
                              <option value="">— Select issue type —</option>
                              {ISSUE_TYPES.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </Form.Select>
                            {errors.issueType && <div className="text-danger mt-1 small">{errors.issueType}</div>}
                          </Form.Group>

                          {/* Custom Issue Input if Other selected */}
                          {form.issueType === "Other" && (
                            <Form.Group className="mt-2">
                              <Form.Control
                                type="text"
                                placeholder="Please specify your issue (e.g. software glitch, wrong model delivered, etc.)..."
                                value={customIssueType}
                                onChange={(e) => {
                                  setCustomIssueType(e.target.value);
                                  setErrors((err) => ({ ...err, customIssue: undefined }));
                                }}
                                isInvalid={!!errors.customIssue}
                              />
                              {errors.customIssue && <div className="text-danger mt-1 small">{errors.customIssue}</div>}
                            </Form.Group>
                          )}
                        </Col>
                      </Row>

                      {/* Issue Description */}
                      <Row className="mb-3">
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label className="form-label">
                              Detailed Description <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              placeholder="Please describe the issue in detail — when it started, symptoms observed, physical damage, missing components, etc."
                              value={form.description}
                              onChange={(e) => {
                                setForm({ ...form, description: e.target.value });
                                setErrors((err) => ({ ...err, description: undefined }));
                              }}
                              isInvalid={!!errors.description}
                              required
                            />
                            {errors.description && <div className="text-danger mt-1 small">{errors.description}</div>}
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Photo Upload Zone */}
                      <Row className="mb-4">
                        <Col md={12}>
                          <Form.Label className="form-label">
                            Attach Damage / Defect Photos <span style={{ fontWeight: "400", color: "#94a3b8" }}>(Optional — max {MAX_FILES} photos, {MAX_SIZE_MB}MB each)</span>
                          </Form.Label>
                          <UploadDropzone
                            $isDragging={isDragging}
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={(e) => {
                              e.preventDefault();
                              setIsDragging(true);
                            }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={(e) => {
                              e.preventDefault();
                              setIsDragging(false);
                              if (e.dataTransfer.files) handleFileChange(e.dataTransfer.files);
                            }}
                          >
                            <div className="icon-wrapper">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                              </svg>
                            </div>
                            <div className="title">Click or drag and drop photos here</div>
                            <p className="sub">Supports JPG, PNG, WebP format</p>
                            <input
                              ref={fileInputRef}
                              type="file"
                              multiple
                              accept="image/jpeg,image/png,image/webp"
                              style={{ display: "none" }}
                              onChange={(e) => {
                                if (e.target.files) handleFileChange(e.target.files);
                              }}
                            />
                          </UploadDropzone>

                          {files.length > 0 && (
                            <ThumbnailsGrid>
                              {files.map((file, idx) => (
                                <div key={idx} className="thumb">
                                  <img src={URL.createObjectURL(file)} alt={`Upload ${idx + 1}`} />
                                  <button type="button" onClick={() => removeFile(idx)} title="Remove photo">
                                    ✕
                                  </button>
                                </div>
                              ))}
                            </ThumbnailsGrid>
                          )}
                        </Col>
                      </Row>

                      <hr style={{ borderColor: "#edeaf2", margin: "28px 0" }} />

                      <SectionHeading style={{ marginBottom: "16px" }}>
                        <h2 style={{ fontSize: "18px" }}>Your Contact Details</h2>
                      </SectionHeading>

                      {/* Customer Info */}
                      <Row className="mb-3">
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label">
                              Full Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Your full name"
                              value={form.customerName}
                              onChange={(e) => {
                                setForm({ ...form, customerName: e.target.value });
                                setErrors((err) => ({ ...err, customerName: undefined }));
                              }}
                              isInvalid={!!errors.customerName}
                              required
                            />
                            {errors.customerName && <div className="text-danger mt-1 small">{errors.customerName}</div>}
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label">
                              Phone Number <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              placeholder="+977 98XXXXXXXX"
                              value={form.customerPhone}
                              onChange={(e) => {
                                setForm({ ...form, customerPhone: e.target.value });
                                setErrors((err) => ({ ...err, customerPhone: undefined }));
                              }}
                              isInvalid={!!errors.customerPhone}
                              required
                            />
                            {errors.customerPhone && <div className="text-danger mt-1 small">{errors.customerPhone}</div>}
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label">
                              Email Address <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="you@example.com"
                              value={form.customerEmail}
                              onChange={(e) => {
                                setForm({ ...form, customerEmail: e.target.value });
                                setErrors((err) => ({ ...err, customerEmail: undefined }));
                              }}
                              isInvalid={!!errors.customerEmail}
                              required
                            />
                            {errors.customerEmail && <div className="text-danger mt-1 small">{errors.customerEmail}</div>}
                          </Form.Group>
                        </Col>
                      </Row>

                      <SubmitButton type="submit" disabled={submitting}>
                        {submitting ? (
                          <>
                            <Spinner size="sm" animation="border" /> Submitting Claim...
                          </>
                        ) : (
                          "Submit Service Request"
                        )}
                      </SubmitButton>
                    </StyledForm>
                  </>
                )}
              </ClaimCard>
            </Col>

            {/* Right Information Column */}
            <Col lg={4} className="mt-4 mt-lg-0">
              <InfoBox>
                <h4>How It Works</h4>
                <div className="step-item">
                  <div className="step-num">1</div>
                  <div className="step-text">
                    <strong>Submit your request:</strong> Fill out the form with product details and attach photos of any defects or damage.
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">2</div>
                  <div className="step-text">
                    <strong>Receive Ticket Number:</strong> An instant sequential reference code (e.g. <code>ST-00001</code>) is issued.
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">3</div>
                  <div className="step-text">
                    <strong>Support Review:</strong> A dedicated support agent picks up your ticket and reaches out for service/replacement.
                  </div>
                </div>
              </InfoBox>

              <InfoBox>
                <h4>Need Immediate Assistance?</h4>
                <p>For urgent questions or quick queries, reach out through our general contact channels:</p>
                <p style={{ margin: 0, fontWeight: "600", color: "#1e1b4b" }}>
                  <Link to="/contact-us" style={{ color: "#6d28d9", textDecoration: "underline" }}>
                    Visit our Contact Page &rarr;
                  </Link>
                </p>
              </InfoBox>
            </Col>
          </Row>
        </Container>
      </ClaimSection>
    </>
  );
});

export default ServiceClaim;
