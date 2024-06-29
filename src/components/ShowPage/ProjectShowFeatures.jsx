import React from "react";

export default function ProjectShowFeatures({ features }) {
  return (
    <section className="card project__features wrapper">
      <h3>Features</h3>
      <div className="col-layout">
        <div className="features-box text-box">{features}</div>
      </div>
    </section>
  );
}
