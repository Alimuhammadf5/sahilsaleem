import { FC, useState } from "react";
import AdminState from "../../utils/adminStatus";
import AddProjects from "../../components/Admin/addProjects";
import AdminLogin from "./adminLogin";
import AddAndUpdate from "../../components/Admin/addAndUpdate";

const Admin: FC = (props) => {
  const { admin, setAdmin } = AdminState();
  const [pageValue, setPageValue] = useState<"update" | "addProjects">(
    "addProjects"
  );

  return (
    <main className="mt-20">
      {admin ? (
        <AddAndUpdate setPageValue={setPageValue} pageValue={pageValue} />
      ) : (
        <AdminLogin setAdmin={setAdmin} admin={admin} />
      )}
    </main>
  );
};

export default Admin;
