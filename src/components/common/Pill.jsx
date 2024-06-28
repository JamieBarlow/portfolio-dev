export default function Pill({ variation, children }) {
  let baseStyles = {
    fontSize: "var(--fs-p)",
    lineHeight: "1.625",
    letterSpacing: "2.29px",
    fontWeight: "400",
    borderRadius: "20px",
    padding: "0px 16px",
    margin: "0px 8px 8px 0px",
  };
  let styles;
  switch (variation) {
    case "original":
      styles = {
        ...baseStyles,
        backgroundColor: "hsl(225, 58%, 70%)",
        color: "white",
      };
      break;
    case "outline":
      styles = {
        ...baseStyles,
        background: "transparent",
        border: "1px solid hsl(153, 71%, 59%)",
      };
      break;
  }
  return <p style={styles}>{children}</p>;
}
