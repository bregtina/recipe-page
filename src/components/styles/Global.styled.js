import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: ${({ theme }) => theme.font.family.primaryFont}, sans-serif;
    font-size: 100%;
    font-weight: 400;
  }

  body {
    background-color: ${({ theme }) => theme.colors.neutral.white};
    color: ${({ theme }) => theme.colors.neutral.darkCharcoal};
  }

  p {
    line-height: 1.5;
  }

  img {
    width: 100%;
  }

  @media(min-width: ${({ theme }) => theme.layout.mobile}) {

    body {
      background-color:  ${({ theme }) => theme.colors.neutral.eggshell};
    }
`;

export default GlobalStyles;
