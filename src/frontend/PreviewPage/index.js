import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

const BACKEND_URL = process.env.REACT_APP_SECRET_KEY || 'http://localhost:3000';
const IMAGE_BASE = `${BACKEND_URL}/frontend/images/products`;

const PreviewPage = () => {
  const { previewId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/admin/preview/${previewId}`);
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
          <a href="javascript:window.close()" style={{
            padding: "12px 24px", backgroundColor: "#6d28d9", color: "#fff",
            borderRadius: "8px", textDecoration: "none", fontWeight: "600"
          }}>Close This Tab</a>
        </div>
      </div>
    );
  }

  const imageUrl = product.image ? `${IMAGE_BASE}/${product.image}` : null;

  return (
    <>
      <Helmet>
        <title>[PREVIEW] {product.title || "Product Preview"} — Sigma Technologies</title>
      </Helmet>

      {/* ─── PREVIEW BANNER ─── */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
        backgroundColor: "#6d28d9", color: "#fff",
        padding: "10px 24px", display: "flex", justifyContent: "space-between",
        alignItems: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.3)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            backgroundColor: "#fbbf24", color: "#78350f",
            fontSize: "11px", fontWeight: "800", padding: "3px 10px",
            borderRadius: "20px", letterSpacing: "1px"
          }}>PREVIEW MODE</span>
          <span style={{ fontSize: "14px", opacity: 0.9 }}>
            This is a <strong>draft preview</strong>. This product has NOT been saved yet.
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

      {/* ─── MAIN CONTENT (with top padding for banner) ─── */}
      <div style={{ paddingTop: "52px" }}>

        {/* Breadcrumb */}
        <div style={{ backgroundColor: "#f9fafb", padding: "16px 0", borderBottom: "1px solid #e5e7eb" }}>
          <Container>
            <nav style={{ fontSize: "14px", color: "#6b7280" }}>
              <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <Link to="/products" style={{ color: "#6b7280", textDecoration: "none" }}>Products</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span style={{ color: "#1f2937", fontWeight: "500" }}>{product.title}</span>
            </nav>
          </Container>
        </div>

        {/* Product Detail Section */}
        <Container style={{ padding: "48px 16px" }}>
          <Row>
            {/* Left: Image */}
            <Col lg={5} style={{ marginBottom: "32px" }}>
              <div style={{
                backgroundColor: "#f3f4f6", borderRadius: "16px",
                overflow: "hidden", aspectRatio: "1", display: "flex",
                alignItems: "center", justifyContent: "center",
                border: "1px solid #e5e7eb"
              }}>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={product.title}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", padding: "16px" }}
                  />
                ) : (
                  <div style={{ textAlign: "center", color: "#9ca3af" }}>
                    <div style={{ fontSize: "64px", marginBottom: "8px" }}>🖼️</div>
                    <p>No image uploaded</p>
                  </div>
                )}
              </div>
            </Col>

            {/* Right: Product Info */}
            <Col lg={7}>
              <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "16px", border: "1px solid #e5e7eb" }}>
                <h1 style={{
                  fontSize: "32px", fontWeight: "800", color: "#1f2937",
                  marginBottom: "16px", lineHeight: "1.2"
                }}>
                  {product.title || "Product Title"}
                </h1>

                {product.summary && (
                  <p style={{
                    fontSize: "16px", color: "#4b5563", lineHeight: "1.7",
                    marginBottom: "24px", paddingBottom: "24px",
                    borderBottom: "1px solid #f3f4f6"
                  }}>
                    {product.summary}
                  </p>
                )}

                {/* Product meta */}
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{
                      padding: "4px 12px", backgroundColor: "#f3f0ff",
                      color: "#6d28d9", borderRadius: "20px", fontSize: "13px", fontWeight: "600"
                    }}>
                      {parseInt(product.status) === 1 ? "✓ Active" : "○ Draft"}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
                  <button style={{
                    padding: "14px 32px", backgroundColor: "#6d28d9", color: "#fff",
                    border: "none", borderRadius: "8px", fontSize: "15px",
                    fontWeight: "700", cursor: "pointer", letterSpacing: "0.5px"
                  }}>
                    Send Enquiry
                  </button>
                  <button style={{
                    padding: "14px 32px", backgroundColor: "transparent",
                    color: "#6d28d9", border: "2px solid #6d28d9",
                    borderRadius: "8px", fontSize: "15px", fontWeight: "700", cursor: "pointer"
                  }}>
                    Download Brochure
                  </button>
                </div>

                {/* SEO fields preview */}
                {(product.seoTitle || product.seoDescription) && (
                  <div style={{
                    backgroundColor: "#fffbeb", padding: "16px", borderRadius: "12px",
                    border: "1px solid #fef3c7"
                  }}>
                    <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: "700", color: "#d97706", textTransform: "uppercase" }}>SEO Preview</p>
                    {product.seoTitle && <p style={{ margin: "0 0 4px", fontWeight: "600", color: "#1d4ed8", fontSize: "15px" }}>{product.seoTitle}</p>}
                    {product.seoDescription && <p style={{ margin: 0, fontSize: "13px", color: "#4b5563" }}>{product.seoDescription}</p>}
                  </div>
                )}
              </div>
            </Col>
          </Row>

          {/* Description Section */}
          {product.description && (
            <Row style={{ marginTop: "32px" }}>
              <Col lg={12}>
                <div style={{
                  backgroundColor: "#ffffff", padding: "32px",
                  borderRadius: "16px", border: "1px solid #e5e7eb"
                }}>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}>
                    Product Description
                  </h2>
                  <div style={{
                    whiteSpace: "pre-wrap", color: "#4b5563",
                    lineHeight: "1.8", fontSize: "15px"
                  }}>
                    {product.description}
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default PreviewPage;
