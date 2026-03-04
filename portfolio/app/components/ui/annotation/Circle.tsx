import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";
import { AnnotationProps } from "./annotationTypes";

export default function Circle({ color, children }: AnnotationProps) {
  const circleColor = colorScheme[color] || colorScheme.ln_darkblue;
  return (
    <span style={{ margin: "4px" }}>
      <RoughNotation
        show={true}
        type="circle"
        multiline={true}
        color={circleColor}
        padding={[5, 5]}
        animate={false}
      >
        {children}
      </RoughNotation>
    </span>
  );
}
