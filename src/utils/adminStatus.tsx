import { useState } from "react";

const AdminState = () => {
  const [admin, setAdmin] = useState<boolean>(false);

  return { admin, setAdmin };
};

export default AdminState;
