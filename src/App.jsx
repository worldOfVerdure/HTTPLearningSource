import { createGlobalStyle } from "styled-components";
import FirstForm from "./components/MDNModules/FirstForm.jsx";
import HTTPObjective from "./components/HTTPObjective/HTTPObjective.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HTTPObjective />
      <FirstForm />
    </>
  );
}

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

  h1, h2 {
    font-family: "Fira Mono", monospace;
    margin: 2rem 0;
  }

  h1 {
    font-size: clamp(2rem, calc(1rem + 2.2vw), 4rem);
    font-weight: 700;
  }

  h2 {
    font-size: clamp(1.8rem, calc(1rem + 2vw), 3.5rem);
    font-weight: 500;
  }

  html {
    font-size: 62.5%;
  }
`;
