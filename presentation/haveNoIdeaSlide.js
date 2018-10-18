import React from "react";
import { Heading, Slide, Appear, Image } from "spectacle";
import noIdea from "../assets/no_idea.jpg";

export default () => (
  <Slide bgColor="secondary">
    <Heading size={2} textColor="tertiary" caps>
      write once <br />
    </Heading>
    <Heading size={2} lineHeight={1} fit textColor="primary">
      and have no idea <br />
      what is happening
    </Heading>
    <Appear>
      <Image
        src={noIdea}
        style={{
          position: "absolute",
          bottom: -120,
          left: -160,
          transform: "rotate(-15deg)",
          width: "250px"
        }}
      />
    </Appear>
  </Slide>
);
