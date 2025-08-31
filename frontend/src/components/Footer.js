import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#000000ff", padding: "20px", marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p className="text-white mt-1" style={{ margin: 0 }}>
            Digitro  - 2023-2024, All Rights Reserved
          </p>
          <span><h3 style={{ margin: "8px 0 0 0" }}>Contact For More Information</h3></span>
          
        </div>
        <Link
          to="/contact"
          className="btn"
          style={{
            backgroundColor: "#474545",
            border: "1px solid #474545",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "16px",
            padding: "8px 16px"
          }}
        >
          Contact Us
        </Link>
      </div>
    </footer>
  )
};
