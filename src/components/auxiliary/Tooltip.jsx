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
  display: inline-block;
  position: relative;

  &:hover span {
    visibility: visible;
  }
  
  & span {
    background-color:rgb(224, 224, 224);
    border-radius: .6rem;
    left: 50%;
    margin-left: -6rem;
    padding: .5rem;
    position: absolute;
    text-align: center;
    top: 115%;
    // transform: translateX(-50%);
    visibility: hidden;
    width: 420px;
  }

  & span::after {
    bottom: 100%;
    content: " ";
    position: absolute;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgb(238, 238, 238)  transparent;
  }
`;
