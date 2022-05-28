import { Box } from "@mui/material";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#2F3B52" />
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="favicon.svg" />
          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
          <link
            rel="manifest"
            href="manifest.webmanifest"
            crossOrigin="use-credentials"
          />
        </Head>
        <body>
          <Box
            sx={{
              p: '10px',
              pb: "70px",
              position: "absolute",
              top: 0,
              left: 0,
              bgcolor: theme.palette.black.main,
              height: "100vh",
              width: "100vw",
              overflow: "hidden",
              overflowY: "auto",
              "::-webkit-scrollbar ": {
                width: "5px",
              },
              "::-webkit-scrollbar-track": {
                background: theme.palette.black.dark,
              },
              "::-webkit-scrollbar-thumb": {
                background: `#ffffff22`,
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: `${theme.palette.black.main}bb`,
              },
            }}
          >
            <Main />
            <NextScript />
          </Box>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
