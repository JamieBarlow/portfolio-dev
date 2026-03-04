import { colorScheme } from "./colorScheme";

export interface AnnotationProps {
  color: keyof typeof colorScheme;
  children: React.ReactNode;
}
