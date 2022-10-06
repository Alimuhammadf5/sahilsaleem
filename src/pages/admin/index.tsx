import { FC } from "react";
import AdminState from "../../utils/adminStatus";
import AddProjects from "./addProjects";
import AdminLogin from "./adminLogin";

const Admin: FC = (props) => {
  const { admin, setAdmin } = AdminState();

  return (
    <main>
      {!admin ? (
        <AddProjects />
      ) : (
        <AdminLogin setAdmin={setAdmin} admin={admin} />
      )}
    </main>
  );
};

export default Admin;
