import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Projects from "../components/projects";
import { trpc } from "../utils/trpc";
import Contact from "./contact";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Sahil Saleem</title>
        <meta
          name="description"
          content="I Sahil Saleem create world class video solutions."
        />
      </Head>

      <main className="flex w-screen flex-col items-center py-20">
        <Landing />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
