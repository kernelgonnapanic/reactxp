import React from "react";
import { Image, Slide, List, ListItem, Layout } from "spectacle";

import webpack from "../assets/webpack.png";
import haul from "../assets/haul.png";

const img = {
  margin: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default () => (
  <Slide bgColor="secondary">
    <Layout fill>
      <div style={img}>
        <Image src={webpack} width={300} fit />
      </div>
      <div style={img}>
        <Image src={haul} width={700} fit />
      </div>
    </Layout>
  </Slide>
);
