import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
export const RootLayouot = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};
