import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding:  0;
    box-sizing: border-box;
    border: none;
}
body{
    font-family: "Poppins", sans-serif;
    max-width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyles;
