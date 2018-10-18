import React from "react";
import { Heading, Slide, Text, Appear } from "spectacle";

const labelStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "#82472D",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  transform: "rotate(-25deg)"
};

const additionalLabel = {
  border: "1px solid #82472D",
  color: "#82472D",
  padding: 20,
  fontSize: 50,
  borderRadius: 10,
  margin: "0 20px 0 0",
  justifyContent: "center",
  alignItems: "center",
  display: "flex"
};

export default () => (
  <Slide bgColor="secondary">
    <div style={{ position: "relative" }}>
      <Heading size={2} fit caps lineHeight={1} textColor="primary">
        Should I bother?
      </Heading>
      <Appear transitionDuration={200} order={1}>
        <div style={labelStyle}>It depends!</div>
      </Appear>
      <Appear transitionDuration={200} order={2} fill>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "100px 0 0 0"
          }}
        >
          <div style={additionalLabel}>UI similarities</div>
          <div style={additionalLabel}>MVPs</div>
          <div style={additionalLabel}>proof of concept</div>
        </div>
      </Appear>
    </div>
  </Slide>
);
