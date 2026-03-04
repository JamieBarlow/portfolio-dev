import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";
import { AnnotationProps } from "./annotationTypes";

interface HighlightProps extends Omit<AnnotationProps, "color"> {
  color?: keyof typeof colorScheme;
}

export default function Highlight({ color, children }: HighlightProps) {
  const highlightColor = color
    ? colorScheme[color] || colorScheme.hl_primary
    : undefined;
  return (
    <span style={{ margin: 2 }}>
      <RoughNotation
        show={true}
        type="highlight"
        multiline={true}
        color={highlightColor}
        animate={false}
      >
        {children}
      </RoughNotation>
    </span>
  );
}
