import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import GlobalStyles from './components/styles/Global.styled.js';
import Container from './components/styles/Container.styled.js';
import { ThemeProvider } from 'styled-components';
import { createContext } from 'react';
import Data from './Data.js';

const theme = {
  colors: {
    heading: {
      nutmeg: 'hsl(14, 45%, 36%)',
      raspberry: 'hsl(332, 51%, 32%)',
    },
    neutral: {
      white: 'hsl(0, 0%, 100%)',
      roseWhite: 'hsl(330, 100%, 98%)',
      eggshell: 'hsl(30, 54%, 90%)',
      lightGrey: 'hsl(30, 18%, 87%)',
      darkCharcoal: 'hsl(24, 5%, 18%)',
    },
  },
  layout: {
    mobile: '375px',
    desktop: '1440px',
  },
  font: {
    size: '16px',
    family: {
      primaryFont: 'Outfit',
      headingFont: 'Young Serif',
    },
  },
};

const Context = createContext();
const data = Data[0];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Context.Provider value={data}>
          <Header />
          <MainContent />
        </Context.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
export { Context };
