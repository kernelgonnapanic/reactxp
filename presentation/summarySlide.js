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

export default () => (
  <Slide bgColor="secondary">
    <Appear>
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="primary"
        lineHeight={1.4}
      >
        know your platforms 💻
      </Heading>
    </Appear>
    <Appear>
      <div style={label}>Thank you!</div>
    </Appear>
  </Slide>
);
