import ResponsiveImg from "../common/ResponsiveImg";

export default function ProjectShowImages({ media }) {
  return (
    <section className="project__images wrapper">
      <div className="screenshot-box constrain">{media.tech}</div>
    </section>
  );
}
