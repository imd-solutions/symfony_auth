interface iPartialHeader {
  heading: string;
  icon: string;
}

export default function PartialHeader({ heading, icon }: iPartialHeader) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="Logo" className="h-14 w-14" src={icon} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
    </div>
  );
}
