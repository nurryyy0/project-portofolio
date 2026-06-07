import Siswa from "../components/Siswa";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Link from 'next/link';

function Home() {
  return (
    <div style={{ background: "var(--bg-0)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={S.hero}>
        {/* Ambient glows */}
        <div style={S.glowCyan} />
        <div style={S.glowPurple} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>

          {/* Main heading */}
          <h1 className="animate-fadeUp animate-delay-1" style={S.heroTitle}>
            Hallo! {" "}
            <span style={S.gradientText}>It's Me</span>
            <br />
            Nurry Nurul <span style={S.gradientText}>Naomi</span>
          </h1>

          {/* ── Tech Stack Section (Di atas deskripsi sesuai permintaan) ── */}
          <div className="animate-fadeUp animate-delay-2" style={S.skillsStrip}>        
            <div style={S.skillsRow}>
              <div style={S.skillChip}><span style={S.skillIcon}>01</span> ML Engineer</div>
              <div style={S.skillChip}><span style={S.skillIcon}>02</span> Graphic Designer</div>
              <div style={S.skillChip}><span style={S.skillIcon}>03</span> Front-end Dev</div>
              <div style={S.skillChip}><span style={S.skillIcon}>04</span> Game Developer</div>
              <div style={S.skillChip}><span style={S.skillIcon}>05</span> Generalist</div>
            </div>
          </div>

          {/* ── Sub-headline Utama (Deskripsi) ── */}
          <p className="animate-fadeUp animate-delay-3" style={S.heroSub}>
            Saya <strong style={{ color: "var(--text-bright)", fontWeight: 600 }}>Naomi </strong> 
            siswa <strong>SMK N 1 Purbalingga. </strong> Selamat datang di portofolio saya, tempat saya membagikan berbagai proyek, pengalaman, dan perjalanan yang telah saya lalui. 
            Jelajahi lebih lanjut untuk mengenal saya dan karya-karya yang telah saya buat. 🚀
          </p>

          {/* CTAs */}
          <Link href="/project" style={S.btnPrimary}>
            View Projects <span>→</span>
          </Link>
          <Link href="/about" style={S.btnGhost}>
            About me
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}

const S = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "64px",
    overflow: "hidden",
  },
  glowCyan: {
    position: "absolute",
    top: "-10%",
    right: "-8%",
    width: "640px",
    height: "640px",
    background: "radial-gradient(circle at center, rgba(34,211,238,0.09) 0%, transparent 65%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  glowPurple: {
    position: "absolute",
    bottom: "5%",
    left: "-5%",
    width: "480px",
    height: "480px",
    background: "radial-gradient(circle at center, rgba(167,139,250,0.07) 0%, transparent 65%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(74, 222, 128, 0.08)",
    border: "1px solid rgba(74, 222, 128, 0.2)",
    color: "#4ade80",
    padding: "0.38rem 0.9rem",
    borderRadius: "100px",
    marginBottom: "2rem",
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#4ade80",
    animation: "pulse-dot 2s ease infinite",
    display: "inline-block",
    boxShadow: "0 0 8px rgba(74, 222, 128, 0.5)",
  },
  heroTitle: {
    fontSize: "clamp(3rem, 7vw, 5.5rem)",
    fontWeight: 900,
    lineHeight: 1.0,
    letterSpacing: "-0.04em",
    color: "var(--text-bright)",
    marginBottom: "1.5rem",
    fontFamily: "var(--font-display)",
  },
  gradientText: {
    background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "var(--text-secondary)",
    lineHeight: 1.75,
    maxWidth: "480px",
    marginBottom: "1.5rem",
    fontWeight: 400,
  },
  siswaBox: {
    display: "inline-block",
    background: "var(--bg-2)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    padding: "0.65rem 1.1rem",
    marginBottom: "2rem",
  },
  ctaRow: {
    display: "flex",
    gap: "0.85rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)",
    color: "#080b12",
    padding: "0.75rem 1.75rem",
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "0.92rem",
    transition: "all 0.25s ease",
    cursor: "pointer",
    letterSpacing: "-0.01em",
  },
  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    background: "var(--bg-2)",
    color: "var(--text-secondary)",
    padding: "0.75rem 1.75rem",
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: "0.92rem",
    border: "1px solid var(--border)",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
  scrollHint: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  scrollLine: {
    width: "30px",
    height: "1px",
    background: "var(--border)",
  },
  skillsStrip: {
    padding: "3rem 0",
  },
  stripLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "1rem",
  },
  skillsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.6rem",
  },
  skillChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    background: "var(--bg-2)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-sm)",
    padding: "0.4rem 0.9rem",
    fontWeight: 500,
    transition: "all 0.2s",
    cursor: "default",
  },
  skillIcon: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    color: "var(--cyan)",
  },
  sectionTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "var(--text-bright)",
    letterSpacing: "-0.025em",
    marginTop: "0.4rem",
    marginBottom: "0.5rem",
  },
  sectionSub: {
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
  },
};

export default Home;
