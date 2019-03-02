import { createGlobalStyle } from 'styled-components'
import { styTM } from './styleVarible'


export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;

        text-decoration: none;

        font-family: "Lato", sans-serif;
        font-weight: 400;

        line-height: 1.7;
        color: ${styTM.color.greyDark};
    }

    body {
        box-sizing: border-box;
    }

    ::selection {
        background-color: ${styTM.color.primaryM};
        color: ${styTM.color.white};
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${styTM.color.greyDark3}; 
        border-radius: 10px;
        background: ${styTM.color.greyDark2}; 
    }

    ::-webkit-scrollbar-thumb {
        background-image:  linear-gradient(
        to right bottom,
        rgba( 168, 60, 60 , 0.8),
        rgba( 211, 123, 123, 0.8)
    );
        border-radius: 5px;
        transition: all .2s ease-out;
    }

    ::-webkit-scrollbar-thumb:hover {
        background:${styTM.color.primaryD}; 
    }
`