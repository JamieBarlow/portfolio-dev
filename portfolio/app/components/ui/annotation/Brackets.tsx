import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";
import { AnnotationProps } from "./annotationTypes";
import type { RoughNotationProps } from "react-rough-notation";
type BracketsType = RoughNotationProps["brackets"];

interface BracketsProps extends AnnotationProps {
  sides: "left" | "right" | "both";
}

export default function Brackets({ color, sides, children }: BracketsProps) {
  const bracketsColor = colorScheme[color] || colorScheme.ln_lightred;
  let bracketsSides: BracketsType;
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
      animate={false}
    >
      {children}
    </RoughNotation>
  );
}
