import { Header } from "components";

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
