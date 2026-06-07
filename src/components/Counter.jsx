import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const color = count > 0 ? "var(--cyan)" : count < 0 ? "#f87171" : "var(--text-bright)";

  return (
    <div style={S.wrapper}>
      <div style={S.card}>
        {/* Label */}
        <p style={S.label}>Interactive Counter</p>

        {/* Number */}
        <div style={S.numWrap}>
          <span style={{ ...S.num, color }}>
            {count > 0 ? `+${count}` : count}
          </span>
        </div>

        {/* Status bar */}
        <div style={S.statusBar}>
          <div style={{
            ...S.statusFill,
            width: `${Math.min(Math.abs(count) * 10, 100)}%`,
            background: count > 0 ? "var(--cyan)" : count < 0 ? "#f87171" : "var(--bg-3)",
            marginLeft: count >= 0 ? "50%" : undefined,
            marginRight: count < 0 ? "50%" : undefined,
            transform: count >= 0 ? "none" : "translateX(-100%)",
          }} />
        </div>

        {/* Controls */}
        <div style={S.controls}>
          <button onClick={() => setCount(count - 1)} style={S.ctrlBtn}>
            −
          </button>

          <button onClick={() => setCount(0)} style={S.resetBtn}>
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            style={{ ...S.ctrlBtn, background: "var(--cyan-dim)", color: "var(--cyan)", borderColor: "var(--cyan-border)" }}
          >
            +
          </button>
        </div>

        {/* Hint text */}
        <p style={S.hint}>Click +/− to change the count value</p>
      </div>
    </div>
  );
}

const S = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem 0",
  },
  card: {
    background: "var(--bg-1)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-xl)",
    padding: "2.5rem 3rem",
    textAlign: "center",
    minWidth: "300px",
    maxWidth: "360px",
    width: "100%",
  },
  label: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "1.5rem",
  },
  numWrap: {
    marginBottom: "1.5rem",
  },
  num: {
    fontFamily: "var(--font-display)",
    fontSize: "5rem",
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-0.05em",
    transition: "color 0.3s ease",
    display: "inline-block",
  },
  statusBar: {
    width: "100%",
    height: "3px",
    background: "var(--bg-3)",
    borderRadius: "3px",
    marginBottom: "2rem",
    overflow: "hidden",
    position: "relative",
  },
  statusFill: {
    height: "100%",
    borderRadius: "3px",
    transition: "width 0.25s ease, background 0.3s ease",
    position: "absolute",
    top: 0,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    marginBottom: "1.25rem",
  },
  ctrlBtn: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "var(--bg-3)",
    border: "1px solid var(--border)",
    color: "var(--text-secondary)",
    fontSize: "1.25rem",
    fontWeight: 300,
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
  },
  resetBtn: {
    background: "transparent",
    border: "1px solid var(--border)",
    color: "var(--text-muted)",
    padding: "0 1.25rem",
    borderRadius: "12px",
    fontSize: "0.78rem",
    fontFamily: "var(--font-mono)",
    cursor: "pointer",
    transition: "all 0.2s",
    height: "48px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  hint: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    color: "var(--text-muted)",
    letterSpacing: "0.03em",
  },
};

export default Counter;