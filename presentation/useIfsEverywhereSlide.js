import React from "react";
import { Heading, Slide, Text, Appear } from "spectacle";

const label = {
  position: "absolute",
  bottom: -100,
  right: 0,
  backgroundColor: "#3A6824",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  transform: "rotate(-15deg)"
};
const label1 = {
  position: "absolute",
  bottom: -100,
  right: -100,
  backgroundColor: "#3A6824",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  transform: "rotate(3deg)"
};
const label2 = {
  position: "absolute",
  bottom: 0,
  left: -60,
  backgroundColor: "#3A6824",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  transform: "rotate(15deg)"
};
const label3 = {
  position: "absolute",
  top: 30,
  right: 50,
  backgroundColor: "#3A6824",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  transform: "rotate(30deg)"
};
const label4 = {
  position: "absolute",
  top: -200,
  right: 0,
  backgroundColor: "#3A6824",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  transform: "rotate(-170deg)"
};

export default () => (
  <Slide bgColor="secondary">
    <Heading size={2} textColor="tertiary" caps>
      write once <br />
    </Heading>
    <div style={{ position: "relative" }}>
      <Heading size={2} lineHeight={1} fit textColor="primary">
        use ifs everywhere
      </Heading>
      <Appear>
        <div>
          <div style={label}>IF</div>
          <div style={label1}>IF</div>
          <div style={label2}>IF</div>
          <div style={label3}>IF</div>
          <div style={label4}>IF</div>
        </div>
      </Appear>
    </div>
  </Slide>
);
