interface iMessageHelper {
  message: string;
  type: string;
}

export default function MessageHelper({ message, type }: iMessageHelper) {
  return (
    <div
      className={` border-l-4 p-4 ${
        type === "error"
          ? "bg-red-100 border-red-500 text-red-700"
          : "bg-orange-100 border-orange-500 text-orange-700"
      }`}
      role="alert"
    >
      <p className="font-bold uppercase ">{type}</p>
      <p>{message}</p>
    </div>
  );
}
