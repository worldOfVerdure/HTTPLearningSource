import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }  

  body {
    align-items: center;
    background-color: #f4f0bd;
    display: flex;
    flex-direction: column;
    font-family: "Gabarito", sans-serif;
    font-size: 1.6rem;
    justify-content: center;
    margin: 0;
  }

  h1 {
    font-family: "Fira Mono", monospace;
    font-size: clamp(2rem, calc(1rem + 2.2vw), 6rem);
    font-weight: 700;
    margin: 2rem 0 0 0;
  }

  html {
    font-size: 62.5%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
