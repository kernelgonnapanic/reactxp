import React from "react";
import { Heading, Slide, Image, Appear } from "spectacle";

import svg from "../assets/monte.svg";
import blog from "../assets/blog.png";

const monteLabel = {
  backgroundColor: "#EC1115",
  padding: "5px 15px 5px 10px",
  borderRadius: 15,
  position: "absolute",
  top: "50%",
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "rotate(15deg)"
};

export default () => (
  <Slide bgColor="secondary">
    <Image src={blog} height={600} fit />
    <Appear>
      <div style={monteLabel}>
        <img src={svg} style={{ width: 50, height: 50 }} />
        Check it out!
      </div>
    </Appear>
  </Slide>
);
