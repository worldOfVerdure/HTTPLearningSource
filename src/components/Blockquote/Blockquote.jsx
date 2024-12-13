import MEDIA_SIZES from "../auxiliary/mediaSizes.js";
import { styled } from "styled-components";

export default function Blockquote( {sourceURL, quote, sourceTitle} ) {
  return (
    <QuoteContainer>
      <StyledBlockquote cite={sourceURL} >
        {quote}
      </StyledBlockquote>
      <cite>
        <a 
          href={sourceURL}
          rel="noopener noreferrer"
          target="_blank"
        >
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

  & p {
    margin: 0;
    text-align: center;
  }

  @media (min-width: ${MEDIA_SIZES.laptopL}) {
    width: 55%;
  }
`;

const StyledBlockquote = styled.blockquote`
  background-color:rgb(189, 189, 189);
  border: .5rem inset rgb(167, 167, 167);
  border-radius: 2rem;
  box-sizing: content-box;
  padding: 1rem 2.5rem;

  & p {
    font-family: "Ovo", serif;
    font-size: clamp(1.6rem, calc(1.2rem + 1vw), 2.5rem);
  }
`;
