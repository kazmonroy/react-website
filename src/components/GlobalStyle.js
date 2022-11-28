import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    :root {
        --base-color: #1b1b1b;
        --second-color: #2fc9e4;
        --third-color: #e3e3e3;
    }

    body {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        background: var(--base-color);
        color: var(--third-color);
    }

    button {
        border-radius: 4px;
        border: 1px solid var(--second-color);
        padding: 8px 16px;
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: var(--third-color);
        cursor: pointer;
        font-family: inherit;
        font-weight: bold;
        font-size: 1rem;

        &:hover {
            background: var(--second-color);
            color: var(--base-color)
            }
        }

    h2 {
        font-size: 3rem
    }


    span {
        color: var(--second-color)
    }


`;

export default GlobalStyle;
