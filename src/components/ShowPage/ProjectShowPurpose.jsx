import React from "react";
import ResponsiveImg from "../common/ResponsiveImg";

export default function ProjectShowPurpose({ purpose, media }) {
  return (
    <section className="project__purpose wrapper my-3">
      <h3>The purpose</h3>
      <div>{purpose}</div>
      <div className="screenshot-box constrain">{media.features}</div>
    </section>
  );
}
