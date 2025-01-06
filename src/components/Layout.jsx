import { useState, useRef, useReducer } from "react";
import { NavLink, Outlet } from "react-router";
import MainButton from "./elements/MainButton";

export default function CreatProject() {
  let [formCreate, setFormCreate] = useState([
    {
      id: "1",
      title: "React studies",
      descriptionRef: "Learn React from the group up",
      date: "2024-01-09",
      anotation: ["my name is"],
    },
  ]);

  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let dueDateRef = useRef(null);
  let anotationRef = useRef();

  const addAnnotation = (e) => {
    e.preventDefault();
    if (!anotationRef.current.value.length === 0) {
      return;
    }
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
    if (title.length === 0 || description.length === 0 || date.length === 0) {
      return;
    }
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
    <div className="gap-0  flex flex-col justify-items-center  lg:flex-row xl:flex-row md:flex-row lg:gap-10">
      <div className=" flex justify-center w-screen h-fit p-3   lg:rounded-r-3xl lg:h-screen lg:w-128 lg:p-9 xl:rounded-r-3xl xl:w-128 xl:p-9 xl:h-screen md:rounded-r-3xl md:w-96 md:p-7 md:h-screen  bg-black text-white ">
        <div className="flex flex-col self-center items-center xl:items-start xl:self-start lg:self-start  lg:items-start  md:self-start md:items-start ">
          <h1 className=" font-semibold mt-3 text-base text-center xl:text-4x1 lg:text-4xl md:text-3xl  sm:text-lg">
            TASKFLOW
          </h1>

          <MainButton color=" bg-gray" hover="bg-gray3">
            <NavLink to="/"> + ADD PROJECT</NavLink>
          </MainButton>
          <div className="grid grid-cols-3 grid-rows-7 px-4 lg:flex lg:flex-col lg:px-0 md:flex md:flex-col md:px-0">
            {formCreate.map((el, index) => {
              return (
                <NavLink
                  key={index}
                  to={el?.id}
                  className=" m-2 text-xs  lg:text-lg hover:text-white my-1"
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
