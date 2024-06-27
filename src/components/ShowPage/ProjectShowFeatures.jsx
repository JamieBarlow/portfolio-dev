import React from "react";

export default function ProjectShowFeatures({ features }) {
  return (
    <section class="card project__features wrapper">
      <h3>Features</h3>
      <div class="col-layout">
        <div class="features-box text-box">{features}</div>
      </div>
    </section>
  );
}
