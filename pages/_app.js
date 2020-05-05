// import App from 'next/app'
import Header from "../components/Header";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
