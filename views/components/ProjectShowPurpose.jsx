import React from "react";
export default function ProjectShowPurpose({ purpose }) {
  return (
    <section class="project__purpose wrapper my-3">
      <h3>The purpose</h3>
      {purpose.map((para) => {
        return <p>{para}</p>;
      })}
    </section>
  );
}
