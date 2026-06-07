import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Project data ────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "SmartLand Project",
    shortDesc: "Aplikasi berbasis Streamlit yang dirancang untuk memprediksi tingkat kesuburan tanah menggunakan algoritma Machine Learning",
    desc: "Sistem cerdas untuk menentukan tingkat kesuburan menjadi Kurang Subur, Cukup Subur, atau Sangat Subur, berdasarkan berbagai parameter kimia tanah secara cepat, praktis, dan mudah digunakan. ",
    thumb: "smartland.png",
    tags: ["Python","Streamlit"],
    category: "App",
    year: "2026",
    links: { github: "https://github.com/nurryyy0/Project-Akhir" },
  },
  {
    id: 2,
    title: "Poertofolio Web",
    shortDesc: "Web Portofolio Nurry Nurul Naomi",
    desc: "Web Portofolio pertama saya sebagai siswa SMK, yang dibangun dengan React dan Vite untuk menciptakan web yang interaktif dan responsif.",
    thumb: "porto.png",
    tags: ["React", "Node.js", "Vite"],
    category: "Web",
    year: "2026",
    links: {github: "#" },
  },
  {
    id: 3,
    title: "The Noyescape",
    shortDesc: "Game platformer 2D pixel art bertema petualangan luar angkasa.",
    desc: "NoyeScape adalah game platformer 2D pixel art yang mengikuti petualangan Noye, seorang astronot muda yang harus melewati berbagai rintangan dan mengumpulkan item untuk mencapai portal dan menyelesaikan setiap level.",
    thumb: "noyescape.jpeg",
    tags: ["Turbowarp"],
    category: "Game",
    year: "2025",
    links: {github: "https://github.com/nurryyy0/Game-The-Noyescape" },
  },
  {
    id: 4,
    title: "SuperStar",
    shortDesc: "Game lompat-lompatan ala platformer klasik.",
    desc: "Game platformer 2D yang mengajak pemain mengendalikan seekor kucing lincah untuk melompati rintangan, mengumpulkan koin, dan mencapai target.",
    thumb: "superstar.png",
    tags: ["scratch"],
    category: "Game",
    year: "2024",
    links: { github: "https://github.com/nurryyy0/SuperStar-Game-2024" },
  },
  {
    id: 5,
    title: "Web Wisata",
    shortDesc: "Membangun web antarmuka yang menonjolkan aspek visual pariwisata Jawa Timur",
    desc: " Proyek pengembangan front-end untuk membangun direktori wisata Jawa Timjur. Fokus pada implementasi desain responsif, optimasi performa loading gambar",
    thumb: "webwisata.jpeg",
    tags: ["HTML","CSS","JavaScript"],
    category: "Web",
    year: "2025",
    links: { github: "https://github.com/nurryyy0/web-wisata-frontend" },
  },
  {
    id: 6,
    title: "Klasifikasi Kopi",
    shortDesc: "Menilai kualitas kopi lebih cepat dengan analisis berbasis data",
    desc: "Aplikasi ini dikembangkan menggunakan Streamlit dan Machine Learning untuk melakukan klasifikasi kualitas kopi berdasarkan karakteristik tertentu. Sistem memberikan hasil prediksi secara real-time lengkap dengan tingkat kepercayaan model terhadap hasil yang diberikan.",
    thumb: "klasskopi.png",
    tags: ["Python","Streamlit"],
    category: "App",
    year: "2025",
    links: { github: "https://github.com/nurryyy0/klasifikasi_kopi" },
  },
];

const CATEGORIES = ["All", "Web", "App", "Game"];

const CATEGORY_COLORS = {
  Web: { color: "var(--cyan)", bg: "var(--cyan-dim)", border: "var(--cyan-border)" },
  App: { color: "var(--purple)", bg: "var(--purple-dim)", border: "var(--purple-border)" },
  Game: { color: "#fb923c", bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.2)" },
};

// ─── Modal Component ─────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const cc = CATEGORY_COLORS[project.category] || CATEGORY_COLORS.Web;
  
  return (
    
    
    <div style={MS.backdrop} onClick={onClose}>
      <div
        style={MS.modal}
        onClick={(e) => e.stopPropagation()}
        className="animate-fadeUp"
      >
        {/* Close */}
        <button onClick={onClose} style={MS.closeBtn} aria-label="Close">
          
        </button>

        {/* Thumbnail */}
        <div style={MS.thumbWrap}>
          <img
            src={project.thumb}
            alt={project.title}
            style={MS.thumb}
          />
          <div style={MS.thumbOverlay} />
          {/* Category badge */}
          <span style={{ ...MS.catBadge, background: cc.bg, color: cc.color, border: `1px solid ${cc.border}` }}>
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div style={MS.content}>
          <div style={MS.header}>
            <div>
              <p style={MS.year}>{project.year}</p>
              <h2 style={MS.title}>{project.title}</h2>
            </div>
            <div style={MS.actions}>

              <a href={project.links.github} style={{ ...MS.actionBtn, ...MS.actionBtnGhost }} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <p style={MS.desc}>{project.desc}</p>

          <div style={MS.tagsRow}>
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────
function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div style={{ background: "var(--bg-0)", minHeight: "100vh" }}>
      <Navbar />
    
      <div style={{ paddingTop: "120px", paddingBottom: "2rem" }}>
        <div className="container">

          {/* Header */}
          <div className="animate-fadeUp" style={{ marginBottom: "3.5rem" }}>
            <span className="section-label">Projects</span>
            <h1 style={PS.title}>Projek Saya</h1>
            <p style={PS.subtitle}>
              Kumpulan proyek yang telah saya kerjakan sebagai bentuk pembelajaran, eksplorasi, dan pengembangan keterampilan di berbagai bidang teknologi dan desain.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="animate-fadeUp animate-delay-1" style={PS.filterRow}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  ...PS.filterBtn,
                  background: activeFilter === cat ? "var(--bg-3)" : "transparent",
                  color: activeFilter === cat ? "var(--text-bright)" : "var(--text-muted)",
                  border: activeFilter === cat
                    ? "1px solid var(--border-hover)"
                    : "1px solid transparent",
                }}
              >
                {cat}
                <span style={{
                  ...PS.filterCount,
                  background: activeFilter === cat ? "var(--cyan-dim)" : "var(--bg-3)",
                  color: activeFilter === cat ? "var(--cyan)" : "var(--text-muted)",
                }}>
                  {cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div style={PS.grid}>
            {filtered.map((proj, i) => {
              const cc = CATEGORY_COLORS[proj.category] || CATEGORY_COLORS.Web;
              return (
                <div
                  key={proj.id}
                  className={`animate-fadeUp animate-delay-${(i % 4) + 1}`}
                  style={PS.card}
                  onClick={() => setSelectedProject(proj)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedProject(proj)}
                >
                  {/* Thumbnail */}
                  <div style={PS.cardThumbWrap}>
                    <img
                      src={proj.thumb}
                      alt={proj.title}
                      style={PS.cardThumb}
                    />
                    <div style={PS.cardThumbOverlay} />
                    <span style={{ ...PS.cardCat, background: cc.bg, color: cc.color, border: `1px solid ${cc.border}` }}>
                      {proj.category}
                    </span>
                    {/* Hover overlay */}
                    <div style={PS.hoverOverlay} className="card-hover-overlay">
                      <span style={PS.hoverIcon}>↗</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={PS.cardBody}>
                    <div style={PS.cardTop}>
                      <h3 style={PS.cardTitle}>{proj.title}</h3>
                      <span style={PS.cardYear}>{proj.year}</span>
                    </div>
                    <p style={PS.cardDesc}>{proj.shortDesc}</p>
                    <div style={PS.cardTags}>
                      {proj.tags.slice(0, 3).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .card-hover-overlay {
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        div[role="button"]:hover .card-hover-overlay {
          opacity: 1;
        }
        div[role="button"] img {
          transition: transform 0.4s ease;
        }
        div[role="button"]:hover img {
          transform: scale(1.04);
        }
        div[role="button"] {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

// ─── Page Styles ─────────────────────────────────────────────────
const PS = {
  title: {
    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
    fontWeight: 900,
    letterSpacing: "-0.035em",
    color: "var(--text-bright)",
    marginBottom: "0.75rem",
    marginTop: "0.5rem",
    fontFamily: "var(--font-display)",
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
  subtitle: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    maxWidth: "480px",
  },
  filterRow: {
    display: "flex",
    gap: "0.4rem",
    marginBottom: "2.5rem",
    flexWrap: "wrap",
  },
  filterBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "0.45rem 0.9rem",
    borderRadius: "10px",
    fontSize: "0.85rem",
    fontWeight: 500,
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "-0.01em",
  },
  filterCount: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "18px",
    height: "18px",
    borderRadius: "4px",
    fontSize: "0.65rem",
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none",
  },
  cardThumbWrap: {
    position: "relative",
    overflow: "hidden",
    height: "200px",
  },
  cardThumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  cardThumbOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, transparent 40%, rgba(8,11,18,0.7) 100%)",
    pointerEvents: "none",
  },
  cardCat: {
    position: "absolute",
    top: "12px",
    right: "12px",
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    fontWeight: 600,
    padding: "0.2rem 0.6rem",
    borderRadius: "6px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  hoverOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(8,11,18,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hoverIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    color: "var(--text-bright)",
    fontFamily: "var(--font-mono)",
  },
  cardBody: {
    padding: "1.25rem",
  },
  cardTop: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "0.5rem",
    marginBottom: "0.4rem",
  },
  cardTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.05rem",
    color: "var(--text-bright)",
    letterSpacing: "-0.02em",
  },
  cardYear: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.68rem",
    color: "var(--text-muted)",
    flexShrink: 0,
  },
  cardDesc: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    lineHeight: 1.6,
    marginBottom: "1rem",
  },
  cardTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
  },
};

// ─── Modal Styles ────────────────────────────────────────────────
const MS = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(4, 6, 10, 0.85)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    animation: "fadeIn 0.2s ease both",
  },
  modal: {
    background: "var(--bg-1)",
    border: "1px solid var(--border-hover)",
    borderRadius: "var(--radius-xl)",
    width: "100%",
    maxWidth: "580px",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
  },
  closeBtn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    zIndex: 10,
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid var(--border)",
    color: "var(--text-secondary)",
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "var(--font-mono)",
  },
  thumbWrap: {
    position: "relative",
    height: "240px",
    overflow: "hidden",
    borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
  },
  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  thumbOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, transparent 40%, var(--bg-1) 100%)",
  },
  catBadge: {
    position: "absolute",
    top: "16px",
    left: "16px",
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    fontWeight: 600,
    padding: "0.25rem 0.7rem",
    borderRadius: "6px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  content: {
    padding: "1.5rem 1.75rem 2rem",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  year: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    color: "var(--text-muted)",
    marginBottom: "4px",
    letterSpacing: "0.06em",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "1.6rem",
    color: "var(--text-bright)",
    letterSpacing: "-0.03em",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    flexShrink: 0,
  },
  actionBtn: {
    display: "inline-flex",
    alignItems: "center",
    background: "linear-gradient(135deg, var(--cyan), var(--purple))",
    color: "#080b12",
    padding: "0.5rem 1.1rem",
    borderRadius: "10px",
    fontSize: "0.82rem",
    fontWeight: 700,
    fontFamily: "var(--font-body)",
    transition: "all 0.2s",
    textDecoration: "none",
  },
  actionBtnGhost: {
    background: "var(--bg-3)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border)",
  },
  desc: {
    fontSize: "0.92rem",
    color: "var(--text-secondary)",
    lineHeight: 1.75,
    marginBottom: "1.25rem",
  },
  tagsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
};

export default Project;