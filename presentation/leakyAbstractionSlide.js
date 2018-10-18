import React from "react";
import {
  BlockQuote,
  Quote,
  Cite,
  Slide,
} from "spectacle";

export default ({ text, color }) => (
  <Slide bgColor="tertiary">
    <BlockQuote>
      <Quote textColor="secondary">All non-trivial abstractions, to some degree, are leaky.</Quote>
      <Cite textColor="secondary" textAlign="right">The Law of Leaky Abstractions</Cite>
    </BlockQuote>
  </Slide>
);
