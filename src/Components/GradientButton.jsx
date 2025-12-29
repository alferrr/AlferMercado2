import React from "react";

const GradientButton = ({
  children = "View My Projects",
  href = "#projects",
  onClick,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const buttonStyle = {
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "16px",
    border: "none",
    padding: "2px",
    background: "radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b)",
    position: "relative",
    fontFamily: "var(--body)",
    transition: "0.3s ease",
    zIndex: 2,
    display: "inline-block",
    textDecoration: "none",
    color: "rgb(255, 255, 255)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    letterSpacing: "-0.5px",
  };

  const afterStyle = {
    content: '""',
    position: "absolute",
    width: "65%",
    height: "60%",
    borderRadius: "120px",
    top: 0,
    right: 0,
    boxShadow: "0 0 20px #ffffff38",
    transition: "0.3s ease",
    zIndex: -1,
    pointerEvents: "none",
  };

  const blob1Style = {
    position: "absolute",
    width: "70px",
    height: "100%",
    borderRadius: "16px",
    bottom: 0,
    left: 0,
    background:
      "radial-gradient(circle 60px at 0% 100%, #ffffff, #181b1b, transparent)",
    boxShadow: "-10px 10px 30px #aaaaaa2d",
    transition: "0.3s ease",
  };

  const innerStyle = {
    padding: "14px 25px",
    borderRadius: "14px",
    color: "#ffffff",
    zIndex: 3,
    position: "relative",
    background: "radial-gradient(circle 80px at 80% -50%, #777777, #0f1111)",
    transition: "0.3s ease",
  };

  const innerBeforeStyle = {
    content: '""',
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    borderRadius: "14px",
    background:
      "radial-gradient(circle 60px at 0% 100%, #cdcdcd1a, #bababa11, transparent)",
    position: "absolute",
    transition: "0.3s ease",
    pointerEvents: "none",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 10,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      style={{
        ...buttonStyle,
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={afterStyle} />
      <div style={blob1Style} />

      <div style={innerStyle}>
        <div style={innerBeforeStyle} />
        <span style={contentStyle}>{children}</span>
      </div>
    </a>
  );
};

export default GradientButton;
