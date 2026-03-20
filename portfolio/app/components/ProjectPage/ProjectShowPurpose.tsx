import type { Project } from "@/app/pagedata/pageData";

type ProjectShowPurpose = Pick<Project, "purpose" | "media">;

export default function ProjectShowPurpose({
  purpose,
  media,
}: ProjectShowPurpose) {
  return (
    <section className="project__purpose wrapper my-3">
      <h3>The purpose</h3>
      <div>{purpose}</div>
      <div className="screenshot-box constrain">{media.features}</div>
    </section>
  );
}
