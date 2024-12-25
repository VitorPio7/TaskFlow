import { NavLink } from "react-router";

export default function NoProject() {
  return (
    <div className="flex flex-col">
      <img src="logo.png" alt="logo" />
      <h1>No Project Selected</h1>
      <button>
        <NavLink to="/">Create new project</NavLink>
      </button>
    </div>
  );
}
