import React from "react";
import { Appear, Slide, Quote, Cite, BlockQuote } from "spectacle";

export default () => (
  <Slide bgColor="secondary">
    <BlockQuote>
      <Quote>We need a web app.</Quote>
      <Cite textAlign="right">The client</Cite>
    </BlockQuote>
    <br />
    <Appear>
      <BlockQuote padding="20px 0 0 0">
        <Quote textColor="quaternary">
          But we will also need an Android and an iOS app.
        </Quote>
      </BlockQuote>
    </Appear>
  </Slide>
);
