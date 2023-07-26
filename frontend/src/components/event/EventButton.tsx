interface iEventButton {
  btnCss?: string;
  btnImage?: {
    icon: string;
    altText: string;
    imgCss: string;
  };
  btnTxt?: string;
  handleOnClick: () => void;
}

export default function EventButton({
  btnCss,
  btnImage,
  btnTxt,
  handleOnClick,
}: iEventButton) {
  return (
    <button onClick={() => handleOnClick()} className={btnCss}>
      {btnImage ? (
        <img
          src={btnImage.icon}
          alt={btnImage.altText}
          className={btnImage.imgCss}
        />
      ) : (
        ""
      )}
      {btnTxt ? btnTxt : ""}
    </button>
  );
}
