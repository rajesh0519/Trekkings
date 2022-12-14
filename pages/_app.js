import "../styles/globals.css";
import "../styles/whatsappBtn.css";
import "react-calendar/dist/Calendar.css";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/anton/400.css";
import "@fontsource/sen";
import "@fontsource/rubik-glitch";
import "@fontsource/kanit";
import "animate.css/animate.min.css";
import StartLoader from "../components/StartLoader";
import { Box, ScaleFade } from "@chakra-ui/react";

import customTheme from "../theme/customTheme";
import React, { useState, useEffect } from "react";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  const [startAnim, setStartAnim] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartAnim(false);
    }, 2000);
  }, []);

  if (!startAnim) {
    return (
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  } else {
    return (
      <ScaleFade initialScale={0.9} in={startAnim}>
        <StartLoader />
      </ScaleFade>
    );
  }
}

export default MyApp;
