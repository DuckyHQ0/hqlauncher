import React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
