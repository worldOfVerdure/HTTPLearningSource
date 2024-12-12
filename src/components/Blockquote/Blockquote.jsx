import { styled } from "styled-components";

export default function Blockquote( {sourceURL, quote, sourceTitle} ) {
  return (
    <QuoteContainer>
      <StyledBlockquote cite={sourceURL} >
        <p>"{quote}"</p>
      </StyledBlockquote>
      <cite>
        <a href={sourceURL}>
          — {sourceTitle}
        </a>
      </cite>
    </QuoteContainer>
  );
}

const QuoteContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    font-family: "Source Code Pro", monospace;
    font-size: clamp(1.3rem, calc(1rem + 1vw), 2.4rem);
  }
`;

const StyledBlockquote = styled.blockquote`
  background-color:rgb(155, 155, 155);

  & p {
    font-family: "Ovo", serif;
    font-size: clamp(1.6rem, calc(1.2rem + 1vw), 3rem);
  }
`;
