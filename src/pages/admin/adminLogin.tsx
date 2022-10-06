import { FC, useEffect } from "react";
import AdminState from "../../utils/adminStatus";
import { trpc } from "../../utils/trpc";

const AdminLogin: FC<{ admin: boolean; setAdmin: any }> = (props) => {
  const { data, mutate } = trpc.useMutation("admin.login");

  const handleAdminLogin = async () => {
    await mutate({
      username: "admin",
      password: "admin123",
    });
  };

  useEffect(() => {
    if (data?.success) {
      props.setAdmin(true);
    }
  }, [data]);

  return (
    <div className="flex w-screen justify-center py-28 px-6">
      <form
        onSubmit={handleAdminLogin}
        className="w-full max-w-lg rounded-md border py-16 px-10"
      >
        <h1 className="text-center text-2xl font-semibold">Admin Login</h1>
      </form>
    </div>
  );
};

export default AdminLogin;
