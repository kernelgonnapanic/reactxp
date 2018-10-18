import React from "react";
import {
  Heading,
  Slide,
  Image
} from "spectacle";

import idyylic from '../assets/idyllic.jpg'

export default ({ text, color }) => (
  <Slide bgColor="secondary">
    <Image
        src={idyylic}
        height={600}
        fit
      />
  </Slide>
);
