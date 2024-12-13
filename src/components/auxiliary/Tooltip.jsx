import { styled } from "styled-components";

export default function Tooltip ( {children, tooltipText} ) {
  return (
    <TooltipContainer> {children}
      <span>{tooltipText}</span>
    </TooltipContainer>
  );
}

const TooltipContainer = styled.div`
  border-bottom: 1px dotted black;
  color:rgb(1, 114, 219);
  display: inline-flex;
  position: relative;

  &:hover span {
    visibility: visible;
  }
  
  & span {
    background-color:rgb(224, 224, 224);
    border-radius: .6rem;
    font-size: clamp(1.2rem, calc(1rem + 1vw), 2.2rem);
    left: 50%;
    padding: .5rem;
    position: absolute;
    text-align: center;
    top: 115%;
    transform: translateX(-50%);
    visibility: hidden;
    width: 20rem;
  }

  & span::after {
    border-color: transparent transparent rgb(238, 238, 238)  transparent;
    border-style: solid;
    border-width: .5rem;
    bottom: 100%;
    content: " ";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`;
