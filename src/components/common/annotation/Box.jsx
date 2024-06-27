import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";

export default function Box({ color, children }) {
  const boxColor = colorScheme[color] || colorScheme.ln_darkred;
  return (
    <RoughNotation
      show={true}
      type="box"
      multiline="true"
      strokeWidth={1}
      padding={[2, 4]}
      style={{ margin: "4px" }}
      color={boxColor}
    >
      {children}
    </RoughNotation>
  );
}
