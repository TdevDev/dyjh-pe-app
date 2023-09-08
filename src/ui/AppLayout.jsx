import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="font-mono grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <main className="overflow-auto mt-8">
        <Outlet />
      </main>

      <footer className="bg-stone-800 px-3 py-4">
        <p className="text-stone-100">Teacher Tim</p>
      </footer>
    </div>
  );
}

export default AppLayout;
