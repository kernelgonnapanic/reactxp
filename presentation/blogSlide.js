import React from "react";
import { Heading, Slide, Image } from "spectacle";

import svg from "../assets/monte.svg";
import blog from "../assets/blog.png";

const monteLabel = {
  backgroundColor: "#EC1115"
};

export default () => (
  <Slide bgColor="secondary">
    <Image src={blog} height={600} fit />
    <div style={moteLabel}>Check it out</div>
    {svg}
  </Slide>
);
