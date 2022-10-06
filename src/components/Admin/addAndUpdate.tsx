import { FC } from "react";
import AddProjects from "./addProjects";
import AllProjects from "./AllProjects";

const AddAndUpdate: FC<{
  pageValue: "update" | "addProjects";
  setPageValue: any;
}> = (props) => {
  return (
    <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center justify-center">
      <div className="flex w-full max-w-xs justify-between gap-5">
        <button
          onClick={() => {
            props.setPageValue("addProjects");
          }}
          className="w-full rounded-lg border py-2 text-sm hover:bg-gray-100"
        >
          Add Project
        </button>
        <button
          onClick={() => {
            props.setPageValue("update");
          }}
          className="w-full rounded-lg border py-2 text-sm hover:bg-gray-100"
        >
          All Projects
        </button>
      </div>
      {props.pageValue === "addProjects" ? <AddProjects /> : <AllProjects />}
    </div>
  );
};

export default AddAndUpdate;
