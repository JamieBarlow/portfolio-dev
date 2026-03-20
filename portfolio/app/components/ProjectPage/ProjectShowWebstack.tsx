import type { Project } from "@/app/pagedata/pageData";

type WebStack = Pick<Project, "webStack">;

export default function ProjectShowWebStack({ webStack }: WebStack) {
  return (
    <section className="project__webStack wrapper my-5">
      <h3>Web Stack & Tech</h3>
      <div className="webstack-box text-box">{webStack}</div>
    </section>
  );
}
