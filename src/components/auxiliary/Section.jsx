import { styled } from "styled-components";

export default function Section( {children} ) {
  return (
    <StyledSection>{children}</StyledSection>
  );
}

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
