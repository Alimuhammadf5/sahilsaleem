import { FC } from "react";
import AdminState from "../../utils/adminStatus";
import AdminLogin from "./adminLogin";

const Admin: FC = (props) => {
  const { admin, setAdmin } = AdminState();

  return (
    <main>
      {admin ? (
        <h1>Admin</h1>
      ) : (
        <AdminLogin setAdmin={setAdmin} admin={admin} />
      )}
    </main>
  );
};

export default Admin;
