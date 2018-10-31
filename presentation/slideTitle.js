import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default () => (
  <Slide bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Write once, run anywhere
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      how does react XP manage to unify mobile and web development
    </Text>
    <br />
    <Text margin="10px 0 0" textColor="tertiary" textSize={20}>
      Anna Konopka, Meet.js Summit 2018
    </Text>
  </Slide>
);
