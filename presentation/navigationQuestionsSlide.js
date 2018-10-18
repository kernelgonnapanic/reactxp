import React, { Fragment } from "react";
import { Heading, Slide, Appear } from "spectacle";

export default () => (
  <Slide bgColor="secondary">
    <Heading size={2} lineHeight={1} fit textColor="primary">
      Should we ...
    </Heading>
    <Appear>
      <Heading size={2} lineHeight={1} fit textColor="primary">
        use the same library for native and web?
      </Heading>
    </Appear>
    <br />
    <Appear>
      <Heading size={2} lineHeight={1} fit textColor="quaternary">
        use native or JS navigation for mobile?
      </Heading>
    </Appear>
  </Slide>
);
