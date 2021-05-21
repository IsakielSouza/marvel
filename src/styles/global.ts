import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(----background);
  -webkit-font-smoothing: antialiased;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; /**15 px */
  }

  @media (max-width: 720px) {
    font-size: 87.5%; /**14px */
  }
}

button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }

`;