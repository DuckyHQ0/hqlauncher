import React from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>HQLauncher</title>
      </Head>
      <div className="bg-black text-text-1 flex flex-col p-32 gap-12 justify-center items-center h-screen w-screen">
        <h1 className="h1 font-bold">404</h1>
        <p className="body">Page was not found</p>
        <a href="/home" className="underline">
          Back
        </a>
      </div>
    </React.Fragment>
  );
}
