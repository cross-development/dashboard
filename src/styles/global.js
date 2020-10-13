//Styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, 
*::after, 
*::before {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    transition: all 0.25s linear;
}
`;
