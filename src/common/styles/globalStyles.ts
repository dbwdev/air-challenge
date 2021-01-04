import {
  blackPigeon7,
  darkBlueJay8,
  offwhite,
  white,
} from 'common/styles/colors';
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${normalize()}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: Helvetica, Arial, sans-serif;
  background: ${white};
  color: ${blackPigeon7};
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  font-weight: 400;
}


h1 {
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-size: 2.5rem;
  color: ${darkBlueJay8};
}
`;

export default GlobalStyle;
