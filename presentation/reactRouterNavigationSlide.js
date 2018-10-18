import React from "react";
import { Image, Slide, Text, Heading, Layout } from "spectacle";

const label = {
  height: 250,
  width: 500,
  padding: 20,
  border: "3px solid #71B551",
  borderRadius: 20,
  margin: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default () => (
  <Slide bgColor="secondary">
    <Layout fill>
      <div style={label}>
        <Heading size={4} textColor="primary">
          React Router
        </Heading>
      </div>
      <div style={label}>
        <Heading size={4} textColor="primary">
          React Navigation
        </Heading>
      </div>
    </Layout>
  </Slide>
);
