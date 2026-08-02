import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { getBackendUrl } from "../../utils/getBackendUrl";

const BACKEND_URL = getBackendUrl();
const IMAGE_BASE = `${BACKEND_URL}/images/blogs`;

const PREVIEW_BANNER_STYLE = {
  position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
  backgroundColor: "#6d28d9", color: "#fff",
  padding: "10px 24px", display: "flex", justifyContent: "space-between",
  alignItems: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.3)"
};

const BlogPreviewPage = () => {
  const { previewId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/admin/preview/${previewId}`);
        if (res.data.result === "success") {
          setBlog(res.data.data);
        } else {
          setError("Preview not found or expired.");
        }
      } catch {
        setError("Preview not found or expired. It may have been more than 15 minutes.");
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();
  }, [previewId]);

  if (loading) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "48px", height: "48px", border: "4px solid #e5e7eb", borderTop: "4px solid #6d28d9", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 16px" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ color: "#6b7280" }}>Generating Blog Preview...</p>
      </div>
    </div>
  );

  if (error) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>⏱️</div>
        <h2>Preview Expired</h2>
        <p style={{ color: "#6b7280" }}>{error}</p>
        <button onClick={() => window.close()} style={{ padding: "12px 24px", backgroundColor: "#6d28d9", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>Close Tab</button>
      </div>
    </div>
  );

  const imageUrl = blog.image ? `${IMAGE_BASE}/${blog.image}` : null;
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <Helmet><title>[PREVIEW] {blog.title || "Blog Preview"} — Sigma Technologies</title></Helmet>

      {/* Preview Banner */}
      <div style={PREVIEW_BANNER_STYLE}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ backgroundColor: "#fbbf24", color: "#78350f", fontSize: "11px", fontWeight: "800", padding: "3px 10px", borderRadius: "20px", letterSpacing: "1px" }}>PREVIEW MODE</span>
          <span style={{ fontSize: "14px", opacity: 0.9 }}>This is a <strong>draft preview</strong>. This blog has NOT been published yet.</span>
        </div>
        <button onClick={() => window.close()} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", padding: "6px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "600" }}>✕ Close Preview</button>
      </div>

      <div style={{ paddingTop: "52px" }}>
        {/* Breadcrumb */}
        <div style={{ backgroundColor: "#f9fafb", padding: "16px 0", borderBottom: "1px solid #e5e7eb" }}>
          <Container>
            <nav style={{ fontSize: "14px", color: "#6b7280" }}>
              <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <Link to="/blogs" style={{ color: "#6b7280", textDecoration: "none" }}>Blogs</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span style={{ color: "#1f2937", fontWeight: "500" }}>{blog.title}</span>
            </nav>
          </Container>
        </div>

        <Container style={{ padding: "48px 16px" }}>
          <Row>
            <Col lg={8}>
              {/* Blog Hero Image */}
              {imageUrl && (
                <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "32px", maxHeight: "450px" }}>
                  <img src={imageUrl} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}

              {/* Blog Meta */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{ padding: "4px 12px", backgroundColor: "#f3f0ff", color: "#6d28d9", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>
                  {parseInt(blog.status) === 1 ? "Active" : "Draft"}
                </span>
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>📅 {dateStr}</span>
              </div>

              {/* Blog Title */}
              <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#1f2937", lineHeight: "1.2", marginBottom: "16px" }}>
                {blog.title || "Blog Title"}
              </h1>

              {/* Summary */}
              {blog.summary && (
                <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.7", marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #e5e7eb", fontStyle: "italic" }}>
                  {blog.summary}
                </p>
              )}

              {/* Content */}
              {blog.description && (
                <div style={{ whiteSpace: "pre-wrap", color: "#374151", lineHeight: "1.9", fontSize: "16px" }}>
                  {blog.description}
                </div>
              )}

              {/* SEO Preview */}
              {(blog.seoTitle || blog.seoDescription) && (
                <div style={{ marginTop: "40px", backgroundColor: "#fffbeb", padding: "20px", borderRadius: "12px", border: "1px solid #fef3c7" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: "#d97706", textTransform: "uppercase" }}>SEO Preview (not visible to users)</p>
                  {blog.seoTitle && <p style={{ margin: "0 0 6px", fontWeight: "600", color: "#1d4ed8", fontSize: "16px" }}>{blog.seoTitle}</p>}
                  {blog.seoDescription && <p style={{ margin: 0, fontSize: "14px", color: "#4b5563" }}>{blog.seoDescription}</p>}
                </div>
              )}
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div style={{ backgroundColor: "#f9fafb", borderRadius: "16px", padding: "24px", border: "1px solid #e5e7eb", position: "sticky", top: "80px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#1f2937", marginBottom: "16px" }}>Preview Info</h3>
                <div style={{ fontSize: "14px", color: "#6b7280", lineHeight: "2" }}>
                  <div><strong>Status:</strong> {parseInt(blog.status) === 1 ? "✅ Active" : "⭕ Draft"}</div>
                  {blog.seoTitle && <div><strong>SEO Title:</strong> {blog.seoTitle}</div>}
                  {blog.seoKeyword && <div><strong>Keywords:</strong> {blog.seoKeyword}</div>}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogPreviewPage;
