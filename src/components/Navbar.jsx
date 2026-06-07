import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/project", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/about", label: "About" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(8, 11, 18, 0.88)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.055)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
      }}>
        <div style={S.inner}>
          {/* Logo */}
          <a
            href="https://www.instagram.com/nnaoou_?igsh=MXZidWtmeW5yNW5tcQ=="
            target="_blank"
            rel="noopener noreferrer"
            style={S.logo}
          >
            <span style={S.logoMark}>N</span>
            <span style={S.logoText}>nnaomii</span>
          </a>

          {/* Desktop nav */}
          <ul style={S.navList}>
            {links.map((l) => (
              <li key={l.to} style={{ listStyle: "none" }}>
                <Link to={l.to} style={{
                  ...S.navLink,
                  color: isActive(l.to) ? "var(--text-bright)" : "var(--text-secondary)",
                }}>
                  {l.label}
                  {isActive(l.to) && <span style={S.activePill} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://www.instagram.com/nnaoou_?igsh=MXZidWtmeW5yNW5tcQ=="
            target="_blank"
            rel="noopener noreferrer"
            style={S.ctaBtn}
            className="nav-cta"
          >
            Hire Me ↗
          </a>

          {/* Hamburger */}
          <button onClick={toggleMenu} style={S.burger} aria-label="Toggle menu">
            <span style={{ ...S.burgerLine, transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ ...S.burgerLine, opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }} />
            <span style={{ ...S.burgerLine, transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={S.mobileOverlay}>
          <div style={S.mobileInner}>
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  ...S.mobileLink,
                  color: isActive(l.to) ? "var(--cyan)" : "var(--text-primary)",
                  animationDelay: `${i * 0.06}s`,
                }}
                className="animate-fadeUp"
              >
                <span style={S.mobileLinkNum}>0{i + 1}</span>
                {l.label}
              </Link>
            ))}
            <div style={S.mobileDivider} />
            <a
              href="https://www.instagram.com/nnaoou_?igsh=MXZidWtmeW5yNW5tcQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={S.mobileIg}
              className="animate-fadeUp"
            >
              @nnaoou_ ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}

const S = {
  inner: {
    /* FIX: Mengubah lebar maksimal agar otomatis melebar (fit) mengikuti kode CSS sebelumnya */
    width: "100%",
    maxWidth: "92%",
    margin: "0 auto",
    padding: "0 2rem",
    height: "76px", /* Mengubah tinggi navbar sedikit lebih gede (dari 64px ke 76px) */
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoMark: {
    width: "32px", /* Disesuaikan sedikit lebih proporsional */
    height: "32px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "0.9rem",
    color: "#080b12",
    flexShrink: 0,
  },
  logoText: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.05rem",
    color: "var(--text-bright)",
    letterSpacing: "-0.02em",
  },
  navList: {
    display: "flex",
    gap: "0.5rem", /* Merenggangkan jarak antar link navbar desktop */
    listStyle: "none",
    margin: "0 auto",
    padding: 0,
  },
  navLink: {
    fontFamily: "var(--font-body)",
    fontSize: "0.92rem", /* Menaikkan ukuran font menu sedikit */
    fontWeight: 400,
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    transition: "color 0.2s, background 0.2s",
  },
  activePill: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "var(--cyan)",
    display: "block",
    boxShadow: "0 0 6px var(--cyan)",
  },
  ctaBtn: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    background: "var(--cyan-dim)",
    color: "var(--cyan)",
    border: "1px solid var(--cyan-border)",
    padding: "0.5rem 1.25rem", /* Tombol Hire Me sedikit lebih tebal */
    borderRadius: "10px",
    fontSize: "0.85rem",
    fontWeight: 600,
    fontFamily: "var(--font-body)",
    transition: "all 0.2s",
    textDecoration: "none",
    letterSpacing: "0.01em",
  },
  burger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "transparent",
    border: "none",
    padding: "8px",
    cursor: "pointer",
  },
  burgerLine: {
    width: "20px",
    height: "1.5px",
    background: "var(--text-primary)",
    borderRadius: "2px",
    transition: "transform 0.3s ease, opacity 0.2s ease",
    display: "block",
  },
  mobileOverlay: {
    position: "fixed",
    inset: 0,
    top: "76px", /* Mengikuti ukuran tinggi navbar baru */
    background: "rgba(8, 11, 18, 0.97)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.25rem",
    width: "100%",
    padding: "2rem",
  },
  mobileLink: {
    fontFamily: "var(--font-display)",
    fontSize: "2.2rem",
    fontWeight: 800,
    textDecoration: "none",
    letterSpacing: "-0.03em",
    display: "flex",
    alignItems: "baseline",
    gap: "0.75rem",
    animation: "fadeUp 0.4s ease both",
    padding: "0.3rem 0",
  },
  mobileLinkNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    color: "var(--text-muted)",
    fontWeight: 400,
    letterSpacing: "0.05em",
  },
  mobileDivider: {
    width: "40px",
    height: "1px",
    background: "var(--border)",
    margin: "1.5rem 0 1rem",
  },
  mobileIg: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.82rem",
    color: "var(--text-muted)",
    textDecoration: "none",
    letterSpacing: "0.04em",
  },
};

// Responsive via media query injection
const mq = document.createElement("style");
mq.textContent = `
  @media (max-width: 768px) {
    .nav-cta { display: none !important; }
  }
  @media (max-width: 640px) {
    nav ul { display: none !important; }
    button[aria-label="Toggle menu"] { display: flex !important; }
  }
  @media (min-width: 641px) {
    button[aria-label="Toggle menu"] { display: none !important; }
  }
  .nav-cta:hover {
    background: var(--cyan-glow) !important;
    box-shadow: 0 0 16px var(--cyan-glow) !important;
  }
`;
if (typeof document !== "undefined" && !document.getElementById("navbar-mq")) {
  mq.id = "navbar-mq";
  document.head.appendChild(mq);
}

export default Navbar;