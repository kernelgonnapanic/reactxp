import React from "react";
import { Appear, Slide, Heading } from "spectacle";

const additionalLabel = {
  border: "1px solid white",
  color: "white",
  padding: 20,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  display: "flex"
};

const row = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

export default () => (
  <Slide bgColor="quaternary">
    <Appear>
      <div>
        <Heading size={2} textColor="secondary" fit>
          Separate entry points
        </Heading>
        <br />
        <div style={row}>
          <div style={additionalLabel}>index.ios.js</div>
          <div style={additionalLabel}>index.android.js</div>
          <div style={additionalLabel}>index.web.js</div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Appear>
    <Appear>
      <div>
        <Heading size={2} textColor="seondary">
          Aliases
        </Heading>
        <br />
        <div style={row}>
          <div style={additionalLabel}>Component.native.tsx</div>
          <div style={additionalLabel}>Component.web.tsx</div>
        </div>
      </div>
    </Appear>
  </Slide>
);
