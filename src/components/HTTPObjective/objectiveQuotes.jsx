import { styled } from "styled-components";
import tooltips from "./objectiveTooltips.js";
import Tooltip from "../auxiliary/Tooltip.jsx";

const QuoteP = styled.p`
  font-family: "Ovo", serif;
  font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2.2rem);
  margin: 0;
  text-align: center;
`;

const objQuoteArray = [
  {
    sourceURL: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#:~:text=to%20see%20ads%3F-,An%20overview%20of%20HTTP,-HTTP%20is%20a",
    quote: <QuoteP>"Hypertext Transfer Protocol (HTTP) is an 
      <Tooltip tooltipText = {tooltips.applicationLayer}>&nbsp;application-layer</Tooltip> 
      <Tooltip tooltipText={tooltips.protocol}>&nbsp;protocol</Tooltip> for fetching resources such
      as HTML documents. It is the foundation of any data exchange on the Web and it is a
      client-server protocol, which means requests are initiated by the recipient, usually the Web
      browser. A complete document is typically constructed from resources such as text content,
      layout instructions, images, videos, scripts, and more."
      </QuoteP>,
    sourceTitle: "MDN"
  },
];

export default objQuoteArray;
