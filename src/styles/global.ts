import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
    }

    textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
        font: 400 1rem Nunito, sans-serif;
        outline: 0;
    }

    input {
        font-family: Nunito, sans-serif;
    }  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
        font: 400 1rem Nunito, sans-serif;
    }
    button {
        font: 400 1rem Nunito, sans-serif;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        max-width: 100vw;
        scroll-behavior: smooth;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-not-allowed;
    }
`