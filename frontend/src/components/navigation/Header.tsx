import { NavLink } from "react-router-dom";
import EventButton from "../event/EventButton";

interface iNavHeader {
  to: string;
  title: string;
  type: string;
  btnInfo:
    | {
        btnCss?: string;
        btnTxt?: string;
      }
    | undefined;
  btnAction: () => void;
}

export default function Header({
  to,
  title,
  type,
  btnInfo,
  btnAction,
}: iNavHeader) {
  const displayNavigation = () => {
    if (type === "button") {
      return (
        <EventButton
          btnCss={btnInfo?.btnCss}
          btnTxt={btnInfo?.btnTxt}
          handleOnClick={() => btnAction()}
        />
      );
    }

    if (type !== "button") {
      return (
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? "block py-2 pl-3 pr-4 mb-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              : "block py-2 pl-3 pr-4 mb-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          }
        >
          {title}
        </NavLink>
      );
    }
  };
  return <>{displayNavigation()}</>;
}
