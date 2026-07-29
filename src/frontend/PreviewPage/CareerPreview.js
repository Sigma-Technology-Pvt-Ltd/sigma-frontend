import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

const BACKEND_URL = process.env.REACT_APP_SECRET_KEY || 'http://localhost:3000';

const PREVIEW_BANNER_STYLE = {
  position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
  backgroundColor: "#6d28d9", color: "#fff",
  padding: "10px 24px", display: "flex", justifyContent: "space-between",
  alignItems: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.3)"
};

const InfoRow = ({ label, value }) =>
  value ? (
    <div style={{ display: "flex", padding: "12px 0", borderBottom: "1px solid #f3f4f6" }}>
      <span style={{ width: "140px", color: "#6b7280", fontSize: "14px", flexShrink: 0 }}>{label}</span>
      <span style={{ color: "#1f2937", fontSize: "14px", fontWeight: "600" }}>{value}</span>
    </div>
  ) : null;

const CareerPreviewPage = () => {
  const { previewId } = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/admin/preview/${previewId}`);
        if (res.data.result === "success") {
          setCareer(res.data.data);
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
        <p style={{ color: "#6b7280" }}>Generating Career Preview...</p>
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

  return (
    <>
      <Helmet><title>[PREVIEW] {career.title || "Career Preview"} — Sigma Technologies</title></Helmet>

      {/* Preview Banner */}
      <div style={PREVIEW_BANNER_STYLE}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ backgroundColor: "#fbbf24", color: "#78350f", fontSize: "11px", fontWeight: "800", padding: "3px 10px", borderRadius: "20px", letterSpacing: "1px" }}>PREVIEW MODE</span>
          <span style={{ fontSize: "14px", opacity: 0.9 }}>This is a <strong>draft preview</strong>. This career has NOT been published yet.</span>
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
              <span style={{ color: "#1f2937", fontWeight: "500" }}>Careers</span>
              <span style={{ margin: "0 8px" }}>›</span>
              <span style={{ color: "#1f2937", fontWeight: "500" }}>{career.title}</span>
            </nav>
          </Container>
        </div>

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%)", color: "#fff", padding: "60px 0" }}>
          <Container>
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
              {career.type && <span style={{ padding: "6px 16px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>💼 {career.type}</span>}
              {career.deadline && <span style={{ padding: "6px 16px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>⏰ Deadline: {career.deadline}</span>}
            </div>
            <h1 style={{ fontSize: "42px", fontWeight: "800", margin: "0 0 16px", lineHeight: "1.2" }}>
              {career.title || "Job Title"}
            </h1>
            {career.summary && <p style={{ fontSize: "18px", opacity: 0.85, maxWidth: "700px", lineHeight: "1.7", margin: 0 }}>{career.summary}</p>}
          </Container>
        </div>

        <Container style={{ padding: "48px 16px" }}>
          <Row>
            {/* Left: Description */}
            <Col lg={8}>
              <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid #e5e7eb", marginBottom: "24px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>Job Description</h2>
                {career.description ? (
                  <div style={{ whiteSpace: "pre-wrap", color: "#374151", lineHeight: "1.9", fontSize: "15px" }}>{career.description}</div>
                ) : (
                  <p style={{ color: "#9ca3af" }}>No description provided yet.</p>
                )}
              </div>

              <button style={{ padding: "16px 40px", backgroundColor: "#6d28d9", color: "#fff", border: "none", borderRadius: "10px", fontSize: "16px", fontWeight: "700", cursor: "pointer", width: "100%" }}>
                Apply Now
              </button>
            </Col>

            {/* Right: Details */}
            <Col lg={4}>
              <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e5e7eb", position: "sticky", top: "80px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#1f2937", marginBottom: "8px" }}>Job Details</h3>
                <InfoRow label="Salary" value={career.salary} />
                <InfoRow label="Deadline" value={career.deadline} />
                <InfoRow label="Education" value={career.education} />
                <InfoRow label="Experience" value={career.experience} />
                <InfoRow label="Vacancies" value={career.noOfVacancy} />
                <InfoRow label="Job Type" value={career.type} />
                <div style={{ marginTop: "16px" }}>
                  <span style={{ padding: "4px 12px", backgroundColor: "#f3f0ff", color: "#6d28d9", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>
                    {parseInt(career.status) === 1 ? "✓ Active" : "○ Draft"}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CareerPreviewPage;
