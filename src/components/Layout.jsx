import { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router";
import MainButton from "./elements/MainButton";

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
    <div className="gap-0  flex flex-col lg:flex-row  lg:gap-10">
      <div className=" flex justify-center w-screen h-56 p-3  xl:h-screen lg:h-screen lg:w-128 lg:p-9 bg-black text-white justify-items-center align-items-cente">
        <div className="flex flex-col self-center items-center ">
          <h1 className=" font-semibold text-base text-center lg:text-4xl sm:text-lg">
            TASKFLOW
          </h1>

          <MainButton color=" bg-gray" hover="bg-gray3">
            <NavLink to="/"> + ADD PROJECT</NavLink>
          </MainButton>
          <div className="grid grid-cols-3 grid-rows-7 px-4">
            {formCreate.map((el, index) => {
              return (
                <NavLink
                  key={index}
                  to={el?.id}
                  className=" m-2 text-xs lg:text-lg hover:text-white my-1"
                >
                  {el?.title}
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
