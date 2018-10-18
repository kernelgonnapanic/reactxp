import React from "react";
import { Heading, Slide, Appear, Image } from "spectacle";
import bug from "../assets/bug.jpg";

export default () => (
  <Slide bgColor="secondary">
    <Heading size={2} textColor="tertiary" caps>
      write once <br />
    </Heading>
    <Appear>
      <Image
        src={bug}
        style={{
          position: "absolute",
          bottom: -150,
          right: -30,
          transform: "rotate(15deg)",
          width: "250px"
        }}
      />
    </Appear>
    <Heading size={2} lineHeight={1} fit textColor="primary">
      debug everywhere
    </Heading>
  </Slide>
);
