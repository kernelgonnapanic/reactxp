import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default ({ text, color }) => (
  <Slide bgColor="primary">
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      {text}
    </Heading>
  </Slide>
);
