import React from "react";
import { CodePane, Slide } from "spectacle";
import CodeSlide from "spectacle-code-slide";

import DoubleComponentWeb from "./code/DoubleComponentWeb.example";

export default () => (
  <CodeSlide
    lang="js"
    code={DoubleComponentWeb}
    bgColor="tertiary"
    color="secondary"
    ranges={[
      { loc: [2, 3], title: "ImagePicker - web" },
      { loc: [20, 28], title: "Picker implementation - web" },
      { loc: [7, 12], title: "Open picker - web" }
    ]}
  />
);
