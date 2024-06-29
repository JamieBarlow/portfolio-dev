export default function ProjectShowLessons({ lessons }) {
  return (
    <section className="project__lessons wrapper my-5">
      <h3>Lessons</h3>
      <div className="lessons-box text-box">{lessons}</div>
    </section>
  );
}
