import { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router";

export default function CreatProject() {
  let [formCreate, setFormCreate] = useState([
    {
      id: "1",
      title: "React studies",
      descriptionRef: "Learn React from the group up",
      date: "Dec 29, 2024",
      anotation: ["my name is"],
    },
  ]);

  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let dueDateRef = useRef(null);
  let anotationRef = useRef();

  const addAnnotation = (e) => {
    e.preventDefault();
    return {
      ...prevValue,
      anotation: [...prevValue, anotationRef.current.value],
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let date = dueDateRef.current.value;
    setFormCreate((prevValue) => {
      return [
        ...prevValue,
        {
          id: String(Date.now()),
          title: title,
          description: description,
          date: date,
          anotation: [],
        },
      ];
    });
  };

  return (
    <div className="gap-0  flex flex-cols lg:gap-10">
      <div className=" w-52  p-3 lg:w-128 lg:p-9 bg-black text-white justify-items-center align-items-cente">
        <div className="h-dvh">
          <h1 className=" font-semibold text-base text-center lg:text-4xl sm:text-lg">
            YOUR PROJECTS
          </h1>
          <button className=" w-36 text-xs h-8 bg-gray lg:align-middle  lg:w-40 lg:h-10 text-center lg:text-xs rounded-md my-2">
            <NavLink to="/"> + ADD PROJECT</NavLink>
          </button>
          <div className="grid grid-cols-1">
            {formCreate.map((el, index) => {
              return (
                <NavLink
                  key={index}
                  to={el.id}
                  className="text-xs lg:text-lg hover:text-white my-1"
                >
                  {el.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet
        context={{
          titleRef,
          descriptionRef,
          dueDateRef,
          handleSubmit,
          formCreate,
          setFormCreate,
          addAnnotation,
          anotationRef,
        }}
      />
    </div>
  );
}
