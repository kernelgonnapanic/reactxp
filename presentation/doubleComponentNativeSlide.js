import React from "react";
import { CodePane, Slide } from "spectacle";
import CodeSlide from "spectacle-code-slide";

import DoubleComponentNative from "./code/DoubleComponentNative.example";

export default () => (
  <CodeSlide
    lang="js"
    code={DoubleComponentNative}
    bgColor="tertiary"
    color="secondary"
    ranges={[
      { loc: [3, 4], title: "ImagePicker - native" },
      { loc: [7, 11], title: "Open picker - native" },
      { loc: [1, 2], title: "External libs" }
    ]}
  />
);
