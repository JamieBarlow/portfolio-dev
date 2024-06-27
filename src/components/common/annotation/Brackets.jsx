import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";

export default function Brackets({ color, sides, children }) {
  const bracketsColor = colorScheme[color] || colorScheme.ln_lightred;
  let bracketsSides;
  switch (sides) {
    case "left":
      bracketsSides = ["left"];
      break;
    case "right":
      bracketsSides = ["right"];
      break;
    case "both":
      bracketsSides = ["left", "right"];
      break;
    default:
      bracketsSides = ["left", "right"];
  }
  return (
    <RoughNotation
      show={true}
      type="bracket"
      strokeWidth={2}
      padding={[5, 10]}
      brackets={bracketsSides}
      color={bracketsColor}
    >
      {children}
    </RoughNotation>
  );
}
