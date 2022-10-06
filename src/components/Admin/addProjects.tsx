import { FC, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "../../utils/trpc";

const AddProjects: FC = (props) => {
  const [formInputed, setFormInputed] = useState<{
    title: string;
    link: string;
    featured: boolean;
  }>({
    title: "",
    link: "https://www.youtube.com/embed/",
    featured: false,
  });
  const { data, mutateAsync, isLoading } = trpc.useMutation("admin.addProject");

  const handleAddProject = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({
        title: formInputed.title,
        link: formInputed.link,
        featured: formInputed.featured,
      });
      toast.success("Project added successfully");
      setFormInputed({
        link: "https://www.youtube.com/embed/",
        title: "",
        featured: false,
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="flex w-screen flex-col items-center py-20">
      <h1 className="text-2xl font-semibold">Add Projects</h1>
      <form
        onSubmit={handleAddProject}
        className="flex-sm flex w-full max-w-screen-md flex-col"
      >
        <div className="mt-8 flex w-full flex-col font-medium">
          <label htmlFor="title">Title</label>
          <input
            value={formInputed.title}
            onChange={(e) => {
              setFormInputed({ ...formInputed, title: e.target.value });
            }}
            type="text"
            className="rounded-md px-6"
          />
        </div>

        <div className="mt-3 flex w-full flex-col font-medium">
          <label htmlFor="title">Link</label>
          <input
            value={formInputed.link}
            onChange={(e) => {
              setFormInputed({ ...formInputed, link: e.target.value });
            }}
            type="text"
            className="rounded-md px-6"
          />
        </div>

        <select
          id="select"
          value={formInputed.featured ? "featured" : "normal"}
          onChange={(e) => {
            setFormInputed({
              ...formInputed,
              featured: e.target.value === "normal" ? false : true,
            });
          }}
          className="mt-5 rounded-md px-6"
        >
          <option value="normal">Normal</option>
          <option value="featured">Featured</option>
        </select>
        <button
          disabled={isLoading}
          className="duration mt-6 h-12 w-full rounded-md bg-blue-600 text-white transition-colors hover:bg-blue-800"
        >
          {isLoading ? "Loading..." : "Add Project"}
        </button>
      </form>
    </main>
  );
};

export default AddProjects;
