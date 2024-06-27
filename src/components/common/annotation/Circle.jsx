import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";

export default function Circle({ color, children }) {
  const circleColor = colorScheme[color] || colorScheme.ln_darkblue;
  return (
    <RoughNotation
      show={true}
      type="circle"
      multiline="true"
      color={circleColor}
      padding={[5, 5]}
      style={{ margin: "4px" }}
    >
      {children}
    </RoughNotation>
  );
}
