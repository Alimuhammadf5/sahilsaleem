import Head from "next/head";
import React, { FC } from "react";
import { trpc } from "../../utils/trpc";

const AllProjects: FC = (props) => {
  const { data, isFetching, refetch } = trpc.useQuery(["admin.getProjects"]);
  const deletion = trpc.useMutation(["admin.deleteProject"]);

  const handleDeleteProject = async (id: string) => {
    await deletion.mutateAsync({
      id: id,
    });
    await refetch();
  };

  return (
    <React.Fragment>
      <Head>
        <title>Sahil Saleem - Projects</title>
        <meta
          name="description"
          content="Sahil Saleem a video editors projects"
        />
      </Head>
      <main
        id="#projects"
        className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-28 px-6"
      >
        <h1 className="text-center text-2xl font-semibold">Projects</h1>

        {isFetching ? (
          <h1 className="mt-10">loading...</h1>
        ) : (
          <div className="mt-14 grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
            {data?.projects.map((project) => (
              <div key={project.id}>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe className="h-full w-full" src={project.link}></iframe>
                </div>
                <div className="mt-3 flex justify-between gap-7">
                  <button
                    onClick={() => {
                      handleDeleteProject(project.id as string);
                    }}
                    className="w-full rounded-lg border border-red-500 py-2 text-red-500 hover:bg-red-500 hover:bg-opacity-20"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </React.Fragment>
  );
};

export default AllProjects;
