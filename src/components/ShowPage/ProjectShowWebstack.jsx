export default function ProjectShowWebStack({ webStack }) {
  return (
    <section className="project__webStack wrapper my-5">
      <h3>Web Stack & Tech</h3>
      <div className="webstack-box text-box">{webStack}</div>
    </section>
  );
}
