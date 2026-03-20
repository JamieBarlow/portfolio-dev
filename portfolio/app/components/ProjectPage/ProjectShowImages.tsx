import type { Project } from "@/app/pagedata/pageData";

type ShowImages = Pick<Project, "media">;

export default function ProjectShowImages({ media }: ShowImages) {
  return (
    <section className="project__images wrapper">
      <div className="screenshot-box constrain">{media.tech}</div>
    </section>
  );
}
