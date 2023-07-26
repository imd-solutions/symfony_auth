interface iInputText {
  value?: string;
  inputId: string;
  inputLabel?: string;
  labelAlignLeft?: boolean;
  labelText?: string;
  labelFor?: string;
  name: string;
  inputType?: string;
  placeholder: string;
  css: string;
  isRequired?: boolean;
  disable?: boolean;
  handleOnChange: (arg1: string, arg2: string) => void;
}
export default function InputText({
  inputId,
  labelText,
  labelAlignLeft,
  name,
  inputType,
  placeholder,
  css,
  handleOnChange,
  value,
  disable,
}: iInputText) {
  return (
    <>
      {labelAlignLeft ? (
        <div className="mb-1 md:mb-0 md:w-1/3">
          <label htmlFor={inputId}>{labelText}</label>
        </div>
      ) : labelText ? (
        <label htmlFor={inputId}>{labelText}</label>
      ) : (
        ""
      )}

      <input
        id={inputId}
        name={name}
        type={inputType}
        placeholder={placeholder}
        className={css}
        onChange={(e) => handleOnChange(inputId, e.target.value)}
        value={value}
        disabled={disable}
      />
    </>
  );
}
