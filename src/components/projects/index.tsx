import Link from "next/link";
import { FC } from "react";
import { trpc } from "../../utils/trpc";

const Projects: FC = (props) => {
  const { data } = trpc.useQuery(["admin.featuredProjects"]);

  return (
    <main className="w-full max-w-screen-lg px-6 py-20">
      <h1 className="text-center text-3xl font-semibold">Projects</h1>
      <div className="mt-14 grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        {data?.projects.map((project) => (
          <div
            key={project.id}
            className="aspect-video w-full overflow-hidden rounded-lg"
          >
            <iframe className="h-full w-full" src={project.link}></iframe>
          </div>
        ))}
      </div>

      <div className="mt-16 flex w-full justify-center">
        <Link href={"/Projects"}>
          <a className="rounded-lg border border-black border-opacity-30 px-8 py-2 font-medium text-black text-opacity-50 transition-all duration-300 hover:border-opacity-100 hover:text-opacity-100">
            View More
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Projects;
