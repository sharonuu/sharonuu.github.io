import '../styles/globals.css'
import '../styles/aos_custom.css'
import React, { useState, useEffect } from "react";
import "animate.css";
import AOS from 'aos'
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = "en-us";

    AOS.init({
        easing: "ease-out-cubic",
        startEvent: "DOMContentLoaded",
        offset: 50,
        delay: 200,
        mirror: true,
    });
}, []);
  return <Component {...pageProps} />
}


export default MyApp
