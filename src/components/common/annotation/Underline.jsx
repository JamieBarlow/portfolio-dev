import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";

export default function Underline({ color, children }) {
  const underlineColor = colorScheme[color] || colorScheme.ul_primary;
  return (
    <RoughNotation
      show={true}
      type="underline"
      multiline="true"
      color={underlineColor}
      strokeWidth="1"
      padding={[2, 0]}
    >
      {children}
    </RoughNotation>
  );
}
