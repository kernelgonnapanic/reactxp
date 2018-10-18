import React from "react";
import { CodePane, Slide } from "spectacle";
import CodeSlide from "spectacle-code-slide";

import BasicComponent from "./code/BasicComponent.example";

export default () => (
  <CodeSlide
    lang="js"
    code={BasicComponent}
    bgColor="tertiary"
    color="secondary"
    ranges={[
      { loc: [0, 1], title: "Styling" },
      { loc: [2, 10], title: "No CSS, styles in JS" },
      { loc: [3, 4], title: "createXStyle" },
      { loc: [14, 18] },
      { loc: [15, 16] }
    ]}
  />
);
