import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme/theme";
import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>DOWFY</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CssBaseline />
      <Box sx={{
        maxWidth: '550px',
        mx: 'auto',
        mt: 2
      }}>
      <Component {...pageProps} />
      </Box>
      <Header />

    </ThemeProvider>
  );
}

export default MyApp;
