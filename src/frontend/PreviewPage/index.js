import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import BreadCrumBox from "../../components/common/BreadCrumbBox";
import {
  ProductDetailContainer,
  DetailAccordion,
  ProductBrandImage,
  ProductEnquiryButton,
  ProductDescription,
} from "../ProductDetail/styles";
import ProductImages from "../ProductDetail/ProductImages";
import { getBackendUrl } from "../../utils/getBackendUrl";

const BACKEND_URL = getBackendUrl();
const IMAGE_BASE = `${BACKEND_URL}/images/products`;

const PreviewPage = () => {
  const { previewId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/admin/preview/${previewId}`);
        if (res.data.result === "success") {
          setProduct(res.data.data);
        } else {
          setError("Preview not found or expired.");
        }
      } catch (err) {
        setError("Preview not found or expired. It may have been more than 15 minutes.");
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();
  }, [previewId]);

  if (loading) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: "48px", height: "48px", border: "4px solid #e5e7eb",
            borderTop: "4px solid #6d28d9", borderRadius: "50%",
            animation: "spin 1s linear infinite", margin: "0 auto 16px"
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ color: "#6b7280" }}>Generating Live Preview...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div style={{ fontSize: "64px", marginBottom: "16px" }}>⏱️</div>
          <h2 style={{ color: "#1f2937", marginBottom: "8px" }}>Preview Expired</h2>
          <p style={{ color: "#6b7280", marginBottom: "24px" }}>{error}</p>
          <button onClick={() => window.close()} style={{
            padding: "12px 24px", backgroundColor: "#6d28d9", color: "#fff",
            borderRadius: "8px", border: "none", fontWeight: "600", cursor: "pointer"
          }}>Close This Tab</button>
        </div>
      </div>
    );
  }

  const mainImage = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${IMAGE_BASE}/${product.image}`
    : null;

  const price = product.price;
  const salePrice = product.salePrice || product.sale_price;

  return (
    <>
      <Helmet>
        <title>[DRAFT PREVIEW] {product.title || "Product Preview"} — Sigma Technologies</title>
      </Helmet>

      {/* ─── STICKY PREVIEW BAR ─── */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
        backgroundColor: "#6d28d9", color: "#fff",
        padding: "10px 24px", display: "flex", justifyContent: "space-between",
        alignItems: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.25)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            backgroundColor: "#fbbf24", color: "#78350f",
            fontSize: "11px", fontWeight: "800", padding: "4px 12px",
            borderRadius: "20px", letterSpacing: "1px"
          }}>LIVE PREVIEW</span>
          <span style={{ fontSize: "14px", opacity: 0.95 }}>
            Viewing <strong>Draft Layout</strong> (Unsaved changes appear here as on live site)
          </span>
        </div>
        <button
          onClick={() => window.close()}
          style={{
            background: "rgba(255,255,255,0.2)", border: "none",
            color: "#fff", padding: "6px 16px", borderRadius: "6px",
            cursor: "pointer", fontWeight: "600", fontSize: "14px"
          }}
        >
          ✕ Close Preview
        </button>
      </div>

      {/* ─── MAIN CONTENT (matching original ProductDetail layout) ─── */}
      <div style={{ paddingTop: "48px" }}>
        <BreadCrumBox title={product?.title || "Product Preview"} />
        <ProductDetailContainer>
          <Container className="pt-5">
            <Row>
              {/* Left Column: Product Image */}
              <Col lg={5}>
                <ProductImages
                  image={mainImage}
                  images={product?.images || []}
                />
              </Col>

              {/* Right Column: Product Header & Info */}
              <Col lg={7}>
                <div className="bg-white px-4 py-3 h-100">
                  <div className="product_content">
                    <div className="product_content-title">
                      <h1>{product?.title}</h1>
                      {product?.brand_image && (
                        <ProductBrandImage>
                          <img
                            src={product?.brand_image}
                            width="100%"
                            height="100%"
                            alt={product?.brand_name || "Brand"}
                          />
                        </ProductBrandImage>
                      )}
                    </div>

                    {/* Price Section with Strikethrough for Sale Price */}
                    <div className="product_content-price align-items-center d-flex">
                      {salePrice ? (
                        <>
                          <del style={{ color: "#9ca3af", marginRight: "12px" }}>
                            Rs: {price}
                          </del>
                          <span style={{ color: "#2563eb", fontWeight: "bold", fontSize: "22px" }}>
                            Rs: {salePrice}
                          </span>
                        </>
                      ) : price ? (
                        <span style={{ color: "#2563eb", fontWeight: "bold", fontSize: "22px" }}>
                          Rs: {price}
                        </span>
                      ) : null}

                      <span style={{
                        marginLeft: "16px",
                        padding: "3px 10px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        backgroundColor: parseInt(product?.status) === 1 ? "#dcfce7" : "#fee2e2",
                        color: parseInt(product?.status) === 1 ? "#166534" : "#991b1b"
                      }}>
                        {parseInt(product?.status) === 1 ? "Active" : "Draft"}
                      </span>
                    </div>
                    <hr />
                  </div>

                  <div className="my-4">
                    <ProductDescription>
                      {product?.category && (
                        <span>
                          <span className="category__title">Category:</span>{" "}
                          {product?.category}
                        </span>
                      )}
                      {product?.summary && (
                        <p style={{ marginTop: "12px" }}>
                          {product?.summary}
                        </p>
                      )}
                    </ProductDescription>

                    <div className="product_action my-4 d-flex">
                      <div className="product_enquire">
                        <ProductEnquiryButton type="button">
                          <span>Enquire Now</span>
                        </ProductEnquiryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Description & Accordions Section */}
            <Row className="py-5">
              <Col lg={8}>
                <div className="product_additional bg-white h-100 p-4" style={{ borderRadius: "12px", border: "1px solid #e5e7eb" }}>
                  <nav>
                    <div className="nav nav-tabs" role="tablist">
                      <button className="nav-link active" type="button" role="tab">
                        Description
                      </button>
                    </div>
                  </nav>

                  <div className="tab-content pt-3">
                    <div className="tab-pane fade show active" role="tabpanel">
                      {product?.description ? (
                        <div
                          style={{ marginTop: "16px", lineHeight: "1.8", color: "#374151" }}
                          dangerouslySetInnerHTML={{ __html: product?.description }}
                        />
                      ) : (
                        <p style={{ color: "#9ca3af", fontStyle: "italic", marginTop: "16px" }}>
                          No description provided for this draft.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <DetailAccordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Specification</Accordion.Header>
                    <Accordion.Body>
                      {product?.specification ? (
                        <div dangerouslySetInnerHTML={{ __html: product?.specification }} />
                      ) : (
                        <p style={{ color: "#9ca3af", fontStyle: "italic", margin: 0 }}>
                          No specifications added.
                        </p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Downloads</Accordion.Header>
                    <Accordion.Body>
                      {product?.downloads && product.downloads.length > 0 ? (
                        product.downloads.map((item, index) => (
                          <a
                            key={index}
                            href={item.filename ? `${BACKEND_URL}/images/documents/${item.filename}` : "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="d-flex align-items-center border-bottom pb-2 pt-2"
                            style={{ color: "#dc3545", textDecoration: "none", cursor: "pointer" }}
                            title="Click to view/download file"
                          >
                            <i className="bx bxs-file-pdf fs-4 me-2"></i>
                            <span className="text-dark">
                              {item.title || item.originalFilename || item.original_filename || item.filename || "Download File"}
                            </span>
                          </a>
                        ))
                      ) : (
                        <p style={{ color: "#9ca3af", fontStyle: "italic", margin: 0 }}>
                          No downloads available.
                        </p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </DetailAccordion>
              </Col>
            </Row>

            <Row>
              <div className="product_recommend my-5 mt-4">
                <div className="product_recommend-title my-3 mb-0">
                  <h2 className="fs-3" style={{ backgroundColor: "#f5f5f588" }}>
                    Related Products
                  </h2>
                </div>
                <p style={{ color: "#9ca3af", fontStyle: "italic", fontSize: "14px", marginTop: "8px" }}>
                  Related products preview placeholder
                </p>
              </div>
            </Row>
          </Container>
        </ProductDetailContainer>
      </div>
    </>
  );
};

export default PreviewPage;
