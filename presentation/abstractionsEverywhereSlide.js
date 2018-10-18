import React from "react";
import { Heading, Slide, Image } from "spectacle";

import abstractions from "../assets/abstractions.jpg";

export default ({ text, color }) => (
  <Slide bgColor="secondary">
    <Image src={abstractions} height={600} fit />
  </Slide>
);
