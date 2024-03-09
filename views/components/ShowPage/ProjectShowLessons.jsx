import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ProjectShowLessons({ lessons }) {
  return (
    <section class="project__lessons wrapper my-5">
      <h3>Lessons</h3>
      <div class="lessons-box text-box">
        {lessons.map((para) => {
          return <p>{ReactHtmlParser(para)}</p>;
        })}
      </div>
    </section>
  );
}
