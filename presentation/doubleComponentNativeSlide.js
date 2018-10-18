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
      { loc: [4, 5], title: "ImagePicker - native" },
      { loc: [8, 12], title: "Open picker - native" },
      { loc: [1, 3], title: "External libs" }
    ]}
  />
);
