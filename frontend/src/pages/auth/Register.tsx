import { useEffect, useState } from "react";
import PartialHeader from "../../components/partials/Header";
import { signupFields } from "../../helpers/authFormFields";
import InputText from "../../components/input/InputText";
import EventButton from "../../components/event/EventButton";
import PartialFooter from "../../components/partials/Footer";
import { icons } from "../../constants";
import { validateValues } from "../../helpers/validation";
import { userRegister } from "./../../services/UserService";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
const fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Register() {
  const [signupState, setSignUpState] = useState(fieldsState);
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (id: string, val: string) => {
    setSignUpState({ ...signupState, [id]: val });
  };
  const signUserUp = () => {
    setErrors(validateValues(signupState));
    setSubmitting(true);
  };

  const completeSignUp = () => {
    delete signupState.confirm_password;
    userRegister(signupState)
      .then(() => {
        alert("User has been registered. Please login into the application.");
        navigate("/login");
      })
      .catch((error: any) => {
        alert(error.response);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      completeSignUp();
    }
  }, [errors]);

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <PartialHeader heading="Create an account" icon={icons.logo} />
        <div className="mt-8 space-y-6">
          <div>
            {fields.map((field, i) => (
              <div key={i}>
                <InputText
                  key={field.id}
                  handleOnChange={(id: string, val: string) =>
                    handleChange(id, val)
                  }
                  value={signupState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  inputId={field.id}
                  name={field.name}
                  inputType={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  css={field.css}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {errors[field.id]}
                </span>
              </div>
            ))}
          </div>
          <EventButton
            btnCss="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            btnTxt="Sign Up"
            handleOnClick={() => signUserUp()}
          />
        </div>
        <PartialFooter
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
      </div>
    </div>
  );
}
