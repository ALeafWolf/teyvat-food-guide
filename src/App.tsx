import * as React from 'react';
import './App.css';
import { AmplifyProvider, ColorMode, createTheme, defaultTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Nav from './components/Nav';
import Main from './components/Main';
function App() {
  const [colorMode, setColorMode] = React.useState<ColorMode>('system');
  const theme = createTheme({
    name: 'dark-mode-theme',
    overrides: [
      {
        colorMode: 'dark',
        tokens: {
          colors: {
            neutral: {
              // flipping the neutral palette
              10: defaultTheme.tokens.colors.neutral[100],
              20: defaultTheme.tokens.colors.neutral[90],
              40: defaultTheme.tokens.colors.neutral[80],
              80: defaultTheme.tokens.colors.neutral[40],
              90: defaultTheme.tokens.colors.neutral[20],
              100: defaultTheme.tokens.colors.neutral[10],
            },
            black: { value: '#fff' },
            white: { value: '#000' },
          },
        },
      },
    ],
  });

  React.useEffect(()=>{
    document.title = "Teyvar Food Guide";
  })
  const setCM = (colorMode: ColorMode) => { setColorMode(colorMode) };

  return (
    <AmplifyProvider theme={theme} colorMode={colorMode}>
      <Nav colorMode={colorMode} setColorMode={setCM} />
      <Main />
    </AmplifyProvider>
  );
}

export default App;
