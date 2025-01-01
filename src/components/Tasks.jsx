import TinyButton from "./elements/TinyButton";
import { PiBroomLight } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
export default function Tasks({ eventChange, eventDelete, children }) {
  return (
    <div className="flex flex-col p-3 gap-2 content-center items-end">
      <li className="max-w-72 my-2  text-justify text-xs sm:max-w-60 lg:my-2 lg:text-2xl md:max-w-96 lg:max-w-screen-lg ">
        {children}
      </li>
      <div className="flex flex-row gap-2 ">
        <TinyButton event={eventChange} color="bg-green" hover="bg-green2">
          <GoPencil className="h-full text-white" />
        </TinyButton>
        <TinyButton color="bg-red" hover="bg-red2" event={eventDelete}>
          <PiBroomLight className="h-full text-white" />
        </TinyButton>
      </div>
    </div>
  );
}
