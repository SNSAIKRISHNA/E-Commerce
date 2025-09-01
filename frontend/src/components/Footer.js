import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "linear-gradient(90deg, #232526 0%, #414345 100%)", padding: "32px 0", marginTop: "40px", color: "#fff", boxShadow: "0 -2px 16px rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <h2 style={{ margin: 0, fontSize: "1.5rem", letterSpacing: "1px", fontWeight: 700 }}>Digitro</h2>
          <p style={{ margin: "8px 0 0 0", fontSize: "1rem", color: "#b0b0b0" }}>
            &copy; 2023-2024 Digitro. All Rights Reserved.
          </p>
        </div>
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <h4 style={{ margin: "0 0 8px 0", fontWeight: 500 }}>Contact</h4>
          <p style={{ margin: 0, color: "#b0b0b0" }}>Have questions or need help?</p>
        </div>
        <div style={{ flex: "1 1 200px", textAlign: "right" }}>
          <Link
            to="/contact"
            className="btn"
            style={{
              background: "linear-gradient(90deg, #989797ff 0%, #000000ff 100%)",
              border: "none",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "1rem",
              padding: "10px 28px",
              fontWeight: 600,
              boxShadow: "0 2px 8px rgba(221,36,118,0.15)",
              transition: "background 0.2s"
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
};
