/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import 'typeface-teko';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;