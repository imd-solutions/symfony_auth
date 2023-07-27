import EventButton from "../components/event/EventButton";
import { icons } from "../constants";
import { useNavigate } from "react-router-dom";
import Logo from "../components/partials/Logo";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo icon={icons.logo} />
        </div>
      </nav>

      <div className="h-screen grid place-items-center ">
        <div className="inline-flex space-x-8">
          <EventButton
            btnCss="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            btnTxt="Login"
            handleOnClick={() => navigate("/login")}
          />
          <EventButton
            btnCss="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            btnTxt="Register"
            handleOnClick={() => navigate("/register")}
          />
        </div>
      </div>
    </>
  );
}
