import { useState } from "react";
import NavigationHeader from "./../navigation/Header";
import { icons } from "../../constants";
import { headerNavigation } from "../../helpers/navigationUrls";
import EventButton from "../event/EventButton";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function SiteHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const logUserOut = () => {
    localStorage.removeItem("authUser");
    navigate("/login");
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo icon={icons.logo} text="CV Logo" />
        <EventButton
          btnImage={{
            icon: showMenu ? icons.close_menu : icons.open_menu,
            altText: "Menu Icon",
            imgCss: "w-5",
          }}
          handleOnClick={() => setShowMenu(!showMenu)}
          btnCss="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        />
        <div
          className={`w-full md:block md:w-auto ${showMenu ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {headerNavigation.map((link, i) => (
              <NavigationHeader
                key={i}
                to={link.link}
                title={link.title}
                type={link.type}
                btnInfo={link.btnInfo}
                btnAction={() => logUserOut()}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
