export default function ProjectShowLessons({ lessons }) {
  return (
    <section class="project__lessons wrapper my-5">
      <h3>Lessons</h3>
      <div class="lessons-box text-box">{lessons}</div>
    </section>
  );
}
