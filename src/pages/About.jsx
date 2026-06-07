import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// CATATAN: Pastikan file "nnn.png" sudah dimasukkan ke dalam folder /public/ di project Anda.
// Tidak perlu lagi ada baris: import profilePhoto from "...";

function About() {
  const facts = [
    {
      icon: "📧",
      label: "Email",
      value: "nurry.naomy28@gmail.com",
      href: "mailto:nurry.naomy28@gmail.com",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "@nurryyy0",
      href: "https://github.com/nurryyy0",
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@nnaoou_",
      href: "https://www.instagram.com/nnaoou_/",
    },
    {
      icon: "📱",
      label: "Contact",
      value: "Hubungi Saya",
      href: "https://wa.me/qr/OQUPXEDHMLKVG1",
    },
  ];

  return (
    <div style={{ background: "var(--bg-0)", minHeight: "100vh", color: "var(--text-bright)" }}>
      <Navbar />
        <div style={S.glowCyan} />
        <div style={S.glowPurple} />

      <div style={{ paddingTop: "120px" }}>
        <div className="container">

          {/* --- Bagian Header Baru: Teks & Foto Berdampingan --- */}
          <div className="animate-fadeUp" style={S.headerGrid}>
            
            {/* Sisi Kiri Header: Teks */}
            <div style={S.headerTextContainer}>
              <span className="section-label">ABOUT</span>
              <h1 style={S.title}>Tentang Saya</h1>
              <p style={S.subtitle}>
                Learning, building, and growing every day.
              </p>
            </div>

            {/* Sisi Kanan Header: Foto Profil (Dipindahkan ke sini) */}
            <div style={S.photoFrameContainer}>
              <div style={S.neonRing}>
                <div style={S.imageCrop}>
                  <img src="/nnn.png" alt="Nurry Nurul Naomi" style={S.profileImage} />
                </div>
              </div>
            </div>
          </div>

          {/* --- Bagian Konten Utama --- */}
          <div style={S.mainGrid}>

            {/* Kolom Bio */}
            <div className="animate-fadeUp animate-delay-1" style={S.bioColumn}>
              <div style={S.paragraphWrapper}>
                <p style={S.bioText}>
                  Haii, Saya <strong style={S.highlight}>Nurry, Nurul Naomi</strong> siswa 
                  <strong style={S.highlight}> Rekayasa Perangkat Lunak (RPL) </strong> di
                  <strong style={S.highlight}> SMK N 1 Purbalingga</strong>, yang senang mempelajari teknologi, 
                  mengembangkan proyek, dan terus mencari pengalaman baru untuk meningkatkan kemampuan 
                  serta wawasan saya. Melalui berbagai kegiatan akademik maupun organisasi, saya berusaha 
                  untuk terus berkembang dan memberikan hasil terbaik dalam setiap kesempatan.
                </p>
              </div>

              <div style={S.btnGroup}>
                <a
                  href="https://www.instagram.com/nnaoou_"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={S.igBtn}
                >
                  <span style={S.igBtnDot} />
                  @nnaoou_ ↗
                </a>
                <a href="/project" style={S.projectsBtn}>
                  View Projects →
                </a>
              </div>
            </div>

            {/* Kolom Kanan (Sekarang Hanya Kartu Kontak) */}
            <div className="animate-fadeUp animate-delay-2" style={S.factsColumn}>
              
              {/* Contact Cards Grid (Foto Sudah Dihapus dari Sini) */}
              <div style={S.factsGrid}>
                {facts.map((f) => (
                  <a href={f.href} key={f.label} target="_blank" rel="noopener noreferrer" style={S.cardLink}>
                    <div style={S.factCard} className="card">
                      <span style={S.factIcon}>{f.icon}</span>
                      <div style={S.cardTextWrapper}>
                        <p style={S.factLabel}>{f.label}</p>
                        <p style={S.factValue}>{f.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Divider */}
          <div style={S.sectionDivider} />
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Styling Object
const S = {
  title: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 900,
    letterSpacing: "-0.04em",
    color: "var(--text-bright)",
    marginBottom: "1rem",
    marginTop: "0.5rem",
    fontFamily: "var(--font-display)",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "var(--text-secondary)",
    maxWidth: "500px",
    lineHeight: "1.6",
    margin: 0,
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
  
  // --- Gaya Header Baru (Berisi Teks & Foto) ---
  headerGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr", // Rasio kolom teks dan foto
    gap: "4rem",
    alignItems: "center", // Teks dan foto terpusat secara vertikal satu sama lain
    marginBottom: "0.5rem", // Spasi di bawah header sebelum konten utama
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem", // Spasi antara label, judul, dan subtitle
  },

  // --- Gaya Main Grid & Konten (Hanya Bio & Kontak) ---
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "4rem",
    alignItems: "start",
  },
  bioColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  paragraphWrapper: {
    borderTop: "1px solid var(--border)",
    paddingTop: "2rem",
  },
  bioText: {
    fontSize: "1.05rem",
    color: "var(--text-secondary)",
    lineHeight: "1.9",
    margin: 0,
  },
  highlight: {
    color: "var(--text-bright)",
    fontWeight: 600,
  },

  // --- Gaya Kolom Kanan Baru (Hanya Fakta) ---
  factsColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start", // Kartu kontak sejajar kiri
    marginTop: "1.5rem", // Spasi kecil di atas untuk memisahkan dari header
  },
  
  // --- Gaya Foto Profil (Meringkas & Melingkar, Diperkecil untuk Header) ---
  photoFrameContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  neonRing: {
    width: "200px", 
    height: "200px", 
    borderRadius: "50%",
    padding: "2.5px", // Ini akan menjadi ketebalan garis gradiennya
    background: "linear-gradient(135deg, var(--cyan, #00ffff), var(--purple, #bc13fe))", // Cincin gradien
    boxShadow: "0 10px 30px rgba(188, 19, 254, 0.25)", // Glow/bayangan lembut di bawah foto
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCrop: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    overflow: "hidden",
    // Border ini menciptakan "jarak" gelap antara foto dan cincin gradien
    border: "4px solid var(--bg-0, #0a0a0a)", 
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  // --- Gaya Grid Kartu Kontak ---
  factsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    width: "100%",
  },
  cardLink: {
    textDecoration: "none",
    transition: "transform 0.2s ease",
  },
  factCard: {
    padding: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "#161616",
    border: "1px solid #222",
    borderRadius: "12px",
    height: "100%",
  },
  factIcon: {
    fontSize: "1.8rem",
    opacity: 0.8,
  },
  cardTextWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  factLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    margin: 0,
  },
  factValue: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--text-bright)",
    margin: 0,
    wordBreak: "break-word",
  },

  // --- Gaya Tombol & Divider ---
  btnGroup: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  igBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#1a1a1a",
    border: "1px solid #333",
    color: "var(--text-secondary)",
    padding: "0.7rem 1.5rem",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: 500,
    textDecoration: "none",
    fontFamily: "var(--font-mono)",
    transition: "all 0.2s ease",
  },
  igBtnDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#e1306c",
  },
  projectsBtn: {
    display: "inline-flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #00ffff, #bc13fe)",
    color: "#000",
    padding: "0.7rem 1.5rem",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: 700,
    textDecoration: "none",
    transition: "opacity 0.2s ease",
  },
  sectionDivider: {
    width: "100%",
    height: "1px",
    background: "var(--border)",
    marginTop: "2rem",
  },
};

export default About;