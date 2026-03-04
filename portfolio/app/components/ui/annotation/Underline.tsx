import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";
import { AnnotationProps } from "./annotationTypes";

interface UnderlineProps extends Omit<AnnotationProps, "color"> {
  color?: keyof typeof colorScheme;
}

export default function Underline({ color, children }: UnderlineProps) {
  const underlineColor = color
    ? colorScheme[color] || colorScheme.ul_primary
    : undefined;
  return (
    <RoughNotation
      show={true}
      type="underline"
      multiline={true}
      color={underlineColor}
      strokeWidth={1}
      padding={[2, 0]}
      animate={false}
    >
      {children}
    </RoughNotation>
  );
}
