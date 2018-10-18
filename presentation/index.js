// Import React
import React from "react";
import SlideTitle from "./slideTitle";
import SlideMe from "./slideMe";
import NewSectionSlide from "./newSectionSlide";
import IdyllaSlide from "./idyllaSlide";
import ClientRequestsSlide from "./clientRequestsSlide";
import LeakyAbstractionSlide from "./leakyAbstractionSlide";
import ShouldIBotherSlide from "./shouldIBotherSlide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import SummarySlide from "./summarySlide";
import AbstractionsEverywhereSlide from "./abstractionsEverywhereSlide";
import UseIfsEverywhereSlide from "./useIfsEverywhereSlide";

import BasicCodeSlide from "./basicCodeSlide";
import CssSlide from "./cssSlide";
import DoubleComponentNativeSlide from "./doubleComponentNativeSlide";
import DoubleComponentWebSlide from "./doubleComponentWebSlide";
import HaveNoIdeaSlide from "./haveNoIdeaSlide";
import DebugEveryWhereSlide from "./debugEveryWhereSlide";
import ReactxpSlide from "./reactxpSlide";
import BuildToolSlides from "./buildToolSlides";
import NavigationSlides from "./navigationSlides";
import YouHadOneProblemSlide from "./youHadOneProblemSlide";
import NavigationQuestionsSlide from "./navigationQuestionsSlide";
import ReactRouterNavigationSlide from "./reactRouterNavigationSlide";
import BlogSlide from "./blogSlide";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#71B551",
    secondary: "white",
    tertiary: "#82472D",
    quaternary: "#3A6824",
    monte: "#EC1115"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <SlideTitle />
        <SlideMe />
        <NewSectionSlide text="A problem" />
        <IdyllaSlide />
        {ClientRequestsSlide()}
        <NewSectionSlide text="Tools" />
        {ReactxpSlide()}
        {BasicCodeSlide()}
        {DoubleComponentNativeSlide()}
        {DoubleComponentWebSlide()}
        {CssSlide()}
        {BuildToolSlides()}
        {NavigationSlides()}
        {NavigationQuestionsSlide()}
        {ReactRouterNavigationSlide()}
        {BlogSlide()}
        {YouHadOneProblemSlide()}
        {HaveNoIdeaSlide()}
        {UseIfsEverywhereSlide()}
        {DebugEveryWhereSlide()}
        <AbstractionsEverywhereSlide />
        <LeakyAbstractionSlide />
        {ShouldIBotherSlide()}
        {SummarySlide()}
        <SlideMe />
      </Deck>
    );
  }
}
