import ResponsiveImages from "../common/ResponsiveImages";

export default function ProjectShowChallenges({ challenges, media }) {
  return (
    <section className="project__challenges my-5 wrapper">
      <div>
        <h3>Challenges</h3>
        <div className="challenges-box text-box">{challenges}</div>
        <div className="screenshot-box challenges">{media.challenges}</div>
      </div>
    </section>
  );
}
