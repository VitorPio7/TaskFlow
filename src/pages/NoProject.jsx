import { NavLink } from "react-router";

export default function NoProject() {
  return (
    <div className="gap-7 flex flex-col w-full items-center justify-center">
      <img src="logo.png" alt="logo" className="w-36" />
      <h1 className="text-4xl font-bold">No Project Selected</h1>
      <p className="text-2xl text-gray">
        Select a project or get started with a new one
      </p>
      <button className="text-xl w-80 h-14 bg-black text-white rounded-lg ">
        <NavLink to="/">Create new project</NavLink>
      </button>
    </div>
  );
}
