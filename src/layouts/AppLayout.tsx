import NavMenu from "../components/NavMenu";
import Logo from "../components/LogoImg";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const AppLayout = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className=" max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>
          <NavMenu />
        </div>
      </header>
      <section className="max-w-screen-2x1 mx-auto mt-10 p-5">
        <Outlet />
      </section>
      <footer className="py-5">
        <p className="text-center">Todos los derechos reservados</p>
      </footer>
      <ToastContainer />
    </>
  );
};

export default AppLayout;
