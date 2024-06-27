import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";

export default function Highlight({ color, children }) {
  const highlightColor = colorScheme[color] || colorScheme.hl_primary;
  return (
    <RoughNotation
      show={true}
      type="highlight"
      multiline="true"
      color={highlightColor}
    >
      {children}
    </RoughNotation>
  );
}
