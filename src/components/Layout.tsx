import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import React, { FC, ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { mailState } from "../recoil/mailState";
import Header from "./Header/Header";
import MailModel from "./mailModel";

const Layout: FC<{ children: ReactNode }> = (props) => {
  const [ismailState, setMailState] = useRecoilState(mailState);

  return (
    <React.Fragment>
      <Head>
        <title>Sahil Saleem</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen overflow-x-hidden">
        <Toaster />
        <AnimatePresence>{ismailState && <MailModel />}</AnimatePresence>
        <Header />
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
