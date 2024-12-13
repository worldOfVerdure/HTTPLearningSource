import Blockquote from "../Blockquote/Blockquote.jsx";
import objQuoteArray from "./objectiveQuotes.jsx";
import Section from "../auxiliary/Section.jsx";

export default function HTTPObjective() {
  return (
    <Section>
      <h2>What does HTTP achieve?</h2>
      <Blockquote {...objQuoteArray[0]}></Blockquote>
    </Section>
  );
}

