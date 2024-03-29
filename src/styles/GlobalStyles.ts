import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding:  0;
    box-sizing: border-box
}
body{
    font-family: "Manrope", sans-serif;
    min-height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyles;
