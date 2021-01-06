import { createGlobalStyle } from 'styled-components';

import RubikBold from '../assets/Rubik-Bold.ttf';
import RubikMedium from '../assets/Rubik-Medium.ttf';
import RubikRegular from '../assets/Rubik-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik';
        src: url(${RubikBold});
        src: url(${RubikMedium});
        src: url(${RubikRegular});
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', Arial, sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }

    a {
        text-decoration: none;
    }
`;