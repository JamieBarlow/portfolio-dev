import type { Project } from "@/app/pagedata/pageData";

type FeaturesProps = Pick<Project, "features">;

export default function ProjectShowFeatures({ features }: FeaturesProps) {
  return (
    <section className="card project__features wrapper">
      <h3>Features</h3>
      <div className="col-layout">
        <div className="features-box text-box">{features}</div>
      </div>
    </section>
  );
}
