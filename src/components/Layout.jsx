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
        },
      ];
    });
  };
  console.log(formCreate);
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1>YOUR PROJECTS</h1>
        <button>+ ADD PROJECT</button>
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
