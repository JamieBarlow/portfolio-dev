import { RoughNotation } from "react-rough-notation";
import { colorScheme } from "./colorScheme";
import { AnnotationProps } from "./annotationTypes";

export default function Box({ color, children }: AnnotationProps) {
  const boxColor = colorScheme[color] || colorScheme.ln_darkred;
  return (
    <span style={{ margin: "4px" }}>
      <RoughNotation
        show={true}
        type="box"
        multiline={true}
        strokeWidth={1}
        padding={[2, 4]}
        color={boxColor}
        animate={false}
      >
        {children}
      </RoughNotation>
    </span>
  );
}
