import React from "react";
import { ProjectProvider } from "../global/projectsContext";
import Head from "next/head";
import "../scss/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Head>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/7562645.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}
