import { Outlet } from "react-router-dom";

// navbar comppnents
import { Navbar } from "../components";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
