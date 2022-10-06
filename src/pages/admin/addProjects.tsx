import { FC } from "react";

const AddProjects: FC = (props) => {
  return (
    <main className="flex w-screen flex-col items-center py-20">
      <h1 className="text-2xl font-semibold">Add Projects</h1>
      <form className="flex-sm flex w-full max-w-screen-md flex-col">
        <div className="mt-8 flex w-full flex-col font-medium">
          <label htmlFor="title">Title</label>
          <input type="text" className="rounded-md px-6" />
        </div>

        <div className="mt-3 flex w-full flex-col font-medium">
          <label htmlFor="title">Link</label>
          <input type="text" className="rounded-md px-6" />
        </div>

        <select id="select" className="mt-5 rounded-md px-6">
          <option value="normal">Normal</option>
          <option value="featured">Featured</option>
        </select>
        <button className="duration mt-6 h-12 w-full rounded-md bg-blue-600 text-white transition-colors hover:bg-blue-800">
          Add Project
        </button>
      </form>
    </main>
  );
};

export default AddProjects;
