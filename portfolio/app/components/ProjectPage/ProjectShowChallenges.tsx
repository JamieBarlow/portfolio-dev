import type { Project } from "@/app/pagedata/pageData";

type ShowChallenges = Pick<Project, "challenges" | "media">;

export default function ProjectShowChallenges({
  challenges,
  media,
}: ShowChallenges) {
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
