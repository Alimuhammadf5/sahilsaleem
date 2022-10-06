import { FC, FormEvent, useEffect, useState } from "react";
import AdminState from "../../utils/adminStatus";
import { trpc } from "../../utils/trpc";

const AdminLogin: FC<{ admin: boolean; setAdmin: any }> = (props) => {
  const { data, mutate } = trpc.useMutation("admin.login");
  const [inputData, setInputData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleAdminLogin = async (e: FormEvent) => {
    e.preventDefault();

    await mutate({
      username: inputData.email,
      password: inputData.password,
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

        <div className="mt-10 w-full">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 opacity-60"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            autoComplete="username"
            value={inputData.email}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            id="username"
            className="mt-1 w-full rounded-md border border-gray-300 px-6 py-3 duration-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mt-4 w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 opacity-60"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={inputData.password}
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
            autoComplete="password"
            id="password"
            className="mt-1 w-full rounded-md border border-gray-300 px-6 py-3 duration-300 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button className="mt-6 h-14 w-full rounded-md bg-blue-600 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
