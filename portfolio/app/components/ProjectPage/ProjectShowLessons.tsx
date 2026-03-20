import type { Project } from "@/app/pagedata/pageData";

type Lessons = Pick<Project, "lessons">;

export default function ProjectShowLessons({ lessons }: Lessons) {
  return (
    <section className="project__lessons wrapper my-5">
      <h3>Lessons</h3>
      <div className="lessons-box text-box">{lessons}</div>
    </section>
  );
}
