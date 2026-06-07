import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={S.footer}>
      <div className="container">     
          <span style={S.copy}>© {year} Frontend Project - Naomi</span>
          <span style={S.madeWith}>
          </span>
      </div>
    </footer>
  );
}

const S = {
  footer: {
    alignItems: "center",
    borderTop: "1px solid var(--border)",
    background: "var(--bg-1)",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
    marginBottom: "2.5rem",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoMark: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, var(--cyan), var(--purple))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "1rem",
    color: "#080b12",
    flexShrink: 0,
  },
  name: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "var(--text-bright)",
    letterSpacing: "-0.01em",
  },
  tagline: {
    fontSize: "0.78rem",
    color: "var(--text-muted)",
    marginTop: "2px",
    fontFamily: "var(--font-mono)",
  },
  links: {
    display: "flex",
    gap: "0.25rem",
    flexWrap: "wrap",
  },
  link: {
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    padding: "0.35rem 0.75rem",
    borderRadius: "8px",
    transition: "color 0.2s, background 0.2s",
    textDecoration: "none",
  },
  ig: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.78rem",
    color: "var(--text-muted)",
    transition: "color 0.2s",
    textDecoration: "none",
    letterSpacing: "0.03em",
  },
  bottom: {
    borderTop: "1px solid var(--border)",
    paddingTop: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  copy: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.72rem",
    color: "var(--text-muted)",
    letterSpacing: "0.03em",
  },
  madeWith: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.72rem",
    color: "var(--text-muted)",
    letterSpacing: "0.03em",
  },
};

export default Footer;