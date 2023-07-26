import InputText from "../../components/input/InputText";
import { loginFields } from "../../helpers/authFormFields";
import { useEffect, useState } from "react";
import PartialHeader from "../../components/partials/Header";
import PartialFooter from "../../components/partials/Footer";
import EventButton from "../../components/event/EventButton";
import { icons } from "../../constants";
import { userLogIn } from "./../../services/UserService";
import { useNavigate } from "react-router-dom";
import { validateValues } from "../../helpers/validation";

const fields = loginFields;
const fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LoginPage() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (id: string, val: string) => {
    setLoginState({ ...loginState, [id]: val });
  };

  const signUserIn = () => {
    setErrors(validateValues(loginState));
    setSubmitting(true);
  };

  const completeSignIn = () => {
    userLogIn(loginState)
      .then((resp: any) => {
        localStorage.setItem("authUser", JSON.stringify(resp.data));
        navigate("/application");
      })
      .catch((error: any) => {
        console.log("ERROR", error.response);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      completeSignIn();
    }
  }, [errors]);

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <PartialHeader heading="Login to your account" icon={icons.logo} />
          <div className="mt-8 space-y-6">
            <div>
              {fields.map((field) => (
                <div key={field.id}>
                  <InputText
                    handleOnChange={(id: string, val: string) =>
                      handleChange(id, val)
                    }
                    value={loginState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    inputId={field.id}
                    name={field.name}
                    inputType={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    css={field.css}
                  />
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 my-3">
                    {errors[field.id]}
                  </span>
                </div>
              ))}
            </div>

            <EventButton
              btnCss="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              btnTxt="Sign In"
              handleOnClick={() => signUserIn()}
            />
          </div>
          <PartialFooter
            paragraph="Don't have an account yet? "
            linkName="Register"
            linkUrl="/register"
          />
        </div>
      </div>
    </>
  );
}
