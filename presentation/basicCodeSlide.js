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
      { loc: [11, 12], title: "Basic Component" },
      { loc: [13, 14], title: "Unified APIs" },
      { loc: [13, 14], title: "Unified APIs" },
      { loc: [18, 23], title: "RX.Platform.getType()" }
    ]}
  />
);
