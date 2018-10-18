import React from "react";
import { Image, Slide, Text, Heading, Layout } from "spectacle";

export default () => (
  <Slide bgColor="primary">
    <Layout fill>
      <Image
        src="https://scontent.fwaw5-1.fna.fbcdn.net/v/t31.0-8/19390735_1594542880570118_277539297021781520_o.jpg?_nc_cat=105&_nc_ht=scontent.fwaw5-1.fna&oh=29c84e4dddd7094d29819a53959d9164&oe=5C5257F2"
        height={600}
        fit
        style={{ borderRadius: 20 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "50px 0 0 80px"
        }}
      >
        <Heading size={4} textColor="secondary">
          Anna Konopka
        </Heading>
        <Text textColor="secondary" fit>
          Front End developer
        </Text>
        <Text textColor="secondary" fit padding="10px">
          🐶 📚 🍣
        </Text>
        <Text textColor="secondary" fit padding="50px">
          kernelgonnapanic.pl
        </Text>
        <Text textColor="secondary" fit padding="50px">
          <i className="fab fa-instagram" /> kernelgonnapanic
        </Text>
        <Text textColor="secondary" fit>
          <i className="fab fa-twitter" /> konopka_ania
        </Text>
      </div>
    </Layout>
  </Slide>
);
