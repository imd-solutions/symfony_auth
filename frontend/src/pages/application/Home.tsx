import { useState, useEffect } from "react";
import InputText from "../../components/input/InputText";
import SiteHeader from "../../components/partials/SiteHeader";
import {
  getUserInformation,
  updateUserInformation,
} from "../../services/UserService";
import ProcessingCircular from "../../components/processing/ProcessingCircular";
import MessageHelper from "../../components/MessageHelper";
import { userFields } from "../../helpers/userFormFields";
import EventButton from "../../components/event/EventButton";

const fields = userFields;
const fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Home() {
  const [data, setData] = useState<any>();
  const [userState, setUserState] = useState<any>(fieldsState);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleChange = (id: string, val: string) => {
    setUserState((userState) => ({
      ...userState,
      [id]: val,
    }));
  };

  const getUser = () => {
    setIsLoading(true);
    try {
      getUserInformation().then((user) => {
        setIsLoading(false);
        setData(user.data);
        setUserState(user.data);
      });
    } catch (error: any) {
      setError(error);
    }
  };

  const processUserUpdate = (id) => {
    setIsLoading(true);
    try {
      updateUserInformation(id, userState).then((user) => {
        setIsLoading(false);
        setData(user.data);
        setIsUpdated(true);
      });
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    setIsUpdated(false);
    getUser();
  }, []);
  return (
    <>
      <SiteHeader />
      {isUpdated ? (
        <div
          className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <span className="font-medium">Success!</span> That has been updated
          for you.
        </div>
      ) : (
        ""
      )}
      <div className="grid place-items-center">
        <h2 className="mb-2 text-2xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          My Details
        </h2>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Update your personal details
        </p>

        {isLoading ? (
          <ProcessingCircular
            colour="blue"
            text="Please hold on. Getting information..."
          />
        ) : error ? (
          <MessageHelper message="Something has gone wrong" type="error" />
        ) : data ? (
          <>
            <form className="w-full max-w-lg divide-y divide-slate-200">
              {fields.map((field) => (
                <div
                  className="text-gray-700 md:flex md:items-center mb-2 py-3"
                  key={field.id}
                >
                  <InputText
                    handleOnChange={(id: string, val: string) =>
                      handleChange(id, val)
                    }
                    value={
                      userState && userState[field.name]
                        ? userState[field.name]
                        : data[field.name]
                    }
                    labelAlignLeft={field.labelAlignLeft}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    inputId={field.id}
                    name={field.name}
                    inputType={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    css={field.css}
                    disable={field.disable}
                  />
                </div>
              ))}
            </form>
            <div className="w-1/2 flex justify-end">
              <EventButton
                btnCss="group relative flex justify-center py-2 px-4 border border-slate-300 hover:border-indigo-300 text-sm font-medium rounded-md text-black bg-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mx-3"
                btnTxt="Cancel"
                handleOnClick={() => console.log("Clicked")}
              />
              <EventButton
                btnCss="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                btnTxt="Save"
                handleOnClick={() => processUserUpdate(data.id)}
              />
            </div>
          </>
        ) : (
          <p>Nothing to see here.</p>
        )}
      </div>
    </>
  );
}
