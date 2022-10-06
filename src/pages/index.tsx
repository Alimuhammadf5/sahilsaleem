import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Projects from "../components/projects";
import { trpc } from "../utils/trpc";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Sahil Saleem</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>

      <main className="flex w-screen flex-col items-center py-20">
        <Landing />
        <Projects />
      </main>
    </>
  );
};

export default Home;
