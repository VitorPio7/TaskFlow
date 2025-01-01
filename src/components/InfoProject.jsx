import MainButton from "./elements/MainButton";
export default function InfoProject({
  title,
  eventDelete,
  date,
  description,
  children,
}) {
  return (
    <div className=" p-3">
      <div className="flex flex-1  gap-1 lg:gap-40  items-center w-full">
        <h1 className=" text-2xl  w-40 mr-3 mt-1  sm:text-2xl lg:w-96 lg:text-6xl font-bold m">
          {title}
        </h1>

        <MainButton color="bg-red" hover="bg-red2" event={eventDelete}>
          Delete
        </MainButton>
      </div>
      <div>
        <p className=" -mt-2 p-0 lg:my-2 text-sm lg:text-lg xl:2xl lg:3xl">
          {date}
        </p>
        <p className="max-w-72 my-2  text-justify  sm:max-w-60 lg:my-2 lg:text-lg md:max-w-96 lg:max-w-screen-lg mt-2 text-sm lg:mt-5 xl:2xl lg:2xl">
          {description}
        </p>
        <h1 className="text-base font-bold lg:mt-5 lg:text-4xl ">{children}</h1>
      </div>
    </div>
  );
}
