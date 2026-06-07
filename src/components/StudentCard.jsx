function StudentCard({ nama, kelas, index, onDelete, onEdit }) {
  const initials = nama ? nama.slice(0, 2).toUpperCase() : "??";

  return (
    <div style={S.card}>
      {/* Index */}
      <span style={S.index}>{String(index).padStart(2, "0")}</span>

      {/* Avatar */}
      <div style={S.avatar}>{initials}</div>

      {/* Info */}
      <div style={S.info}>
        <p style={S.name}>{nama}</p>
        <p style={S.kelas}>{kelas}</p>
      </div>

      {/* Actions */}
      <div style={S.actions}>
        <button onClick={onEdit} style={S.editBtn}>Edit</button>
        <button onClick={onDelete} style={S.deleteBtn}>Hapus</button>
      </div>
    </div>
  );
}

const S = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "0.85rem",
    background: "var(--bg-1)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    padding: "0.9rem 1.1rem",
    transition: "border-color 0.2s, transform 0.2s",
  },
  index: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    color: "var(--text-muted)",
    fontWeight: 400,
    minWidth: "20px",
  },
  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    background: "var(--cyan-dim)",
    border: "1px solid var(--cyan-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "0.75rem",
    color: "var(--cyan)",
    flexShrink: 0,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.92rem",
    color: "var(--text-bright)",
    letterSpacing: "-0.015em",
    marginBottom: "2px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  kelas: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.72rem",
    color: "var(--text-muted)",
  },
  actions: {
    display: "flex",
    gap: "0.4rem",
    flexShrink: 0,
  },
  editBtn: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid var(--border)",
    padding: "0.35rem 0.75rem",
    borderRadius: "8px",
    fontSize: "0.75rem",
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  deleteBtn: {
    background: "transparent",
    color: "#f87171",
    border: "1px solid rgba(248,113,113,0.2)",
    padding: "0.35rem 0.75rem",
    borderRadius: "8px",
    fontSize: "0.75rem",
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    transition: "all 0.2s",
  },
};

export default StudentCard;