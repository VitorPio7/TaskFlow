import { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router";
import { Navigate } from "react-router";

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
  if (formCreate.length === 0) {
    return <Navigate to="noProject" />;
  }

  return (
    <div className="flex flex-cols tex ">
      <div className="  w-128 p-9 bg-black text-white justify-items-center align-items-cente">
        <div className="h-dvh">
          <h1 className="font-semibold text-4xl">YOUR PROJECTS</h1>
          <button className="bg-gray w-72 h-10 rounded-md">
            <NavLink to="/"> + ADD PROJECT</NavLink>
          </button>
          <div className="grid grid-cols-1">
            {formCreate.map((el, index) => {
              return (
                <NavLink key={index} to={el.id}>
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
