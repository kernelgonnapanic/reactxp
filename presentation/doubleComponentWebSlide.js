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
      { loc: [4, 5], title: "ImagePicker - web" },
      { loc: [8, 12], title: "Open picker - web" }
    ]}
  />
);
