import React from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>HQLauncher</title>
      </Head>
      <div className="bg-black text-text-1 flex flex-col p-32 gap-12 justify-center items-center h-screen w-screen">
        <h1 className="h1 font-bold">Success!</h1>
        <p className="body">Your account was verified succesfully.</p>
        <a href="/" className="underline">
          Back
        </a>
      </div>
    </React.Fragment>
  );
}
