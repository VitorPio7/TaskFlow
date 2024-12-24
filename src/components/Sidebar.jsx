import { NavLink } from "react-router";
import { Outlet } from "react-router";

export default function Sidebar({ title, button, formCreate }) {
  return (
    <>
      <aside>
        <h1>{title}</h1>
        <button>{button}</button>
        <div className="grid grid-cols-1 cursor-pointer">
          {formCreate?.map((el, index) => {
            return (
              <NavLink to={el.id} key={index}>
                {el.title}
              </NavLink>
            );
          })}
        </div>
      </aside>
      <Outlet context={[formCreate]} />
    </>
  );
}
