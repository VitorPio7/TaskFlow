import { useParams } from "react-router";
import { useOutletContext, useNavigate } from "react-router";
import { useRef, useState } from "react";
import { GoPencil } from "react-icons/go";

export default function ProjectDetail() {
  const editAnotation = useRef("");
  const { formCreate, setFormCreate } = useOutletContext();
  const myParams = useParams();
  let anotationRef = useRef();
  const navitage = useNavigate();
  let arrData = formCreate?.find((el) => String(el?.id) === myParams.id);
  console.log(formCreate);
  const deleteProject = (id) => {
    setFormCreate((prevValue) => {
      return prevValue.filter((el) => {
        return id !== el.id;
      });
    });
    navitage("/noProject");
  };

  const addAnnotation = (e) => {
    e.preventDefault();
    const annotaitionValue = anotationRef.current.value;
    if (!annotaitionValue.trim()) return;
    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project?.id) === myParams?.id) {
          return {
            ...project,
            anotation: [...project?.anotation, annotaitionValue],
          };
        }
        return project;
      });
    });
    anotationRef.current.value = "";
  };

  const deleteAnnotation = (e) => {
    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project?.id) === myParams.id) {
          return {
            ...project,
            anotation: project.anotation.filter((el, index) => index !== e),
          };
        }
      });
    });
  };
  const editeAnnotation = (e) => {
    console.log(e);
    const annotaitionValue = editAnotation.current;
    console.log(annotaitionValue);
    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project?.id) === myParams.id) {
          return {
            ...project,
            anotation: project?.anotation.map((el, index) => {
              if (e === index) {
                return (el = annotaitionValue.value);
              }
            }),
          };
        }
      });
    });
  };
  return (
    <>
      <div className=" p-3 lg:p-9 lg:w-2/3">
        <div className="flex flex-1 gap-1 lg:gap-40  items-center w-full">
          <h1 className=" text-2xl  w-40  mt-1 mb-0 sm:text-2xl lg:w-96 lg:text-6xl font-bold m">
            {arrData?.title}
          </h1>

          <button
            className="bg-black w-16 h-8 text-xs text-white rounded-lg lg:text-lg lg:w-40 lg:h-11 hyphens-auto shadow-md hover:bg-gray2 hover:text-black"
            onClick={() => deleteProject(arrData.id)}
          >
            Delete
          </button>
        </div>
        <p className=" lg:my-2 text-sm lg:text-lg xl:2xl lg:3xl">
          {arrData?.date}
        </p>
        <p className=" mt-2 lg:my-2 text-sm lg:text-lg lg:mt-5 xl:2xl lg:2xl">
          {arrData?.description}
        </p>
        <h1 className="text-base font-bold lg:mt-5 lg:text-4xl ">Tasks</h1>
        <div className="flex gap-2">
          <input
            className="bg-light-gray bg-gray-50 border p-2.5 border-gray-300 text-gray-900 text-xs sm:w-56 md:w-96 lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 lg:w-96 lg:p-2.5 "
            type="text"
            maxLength="600"
            ref={anotationRef}
          />

          <button
            className="bg-light-gray  w-16 text-xs lg:w-32 rounded-lg lg:text-lg  hover:shadow-lg"
            onClick={addAnnotation}
          >
            Add Task
          </button>
        </div>
        <div>
          <ul>
            {arrData?.anotation?.map((el, index) => {
              return (
                <div
                  className="flex flex-row my-2 gap-1 lg:gap-7 items-center lg:my-3"
                  key={index}
                >
                  <li className="max-w-44 my-2  text-justify text-xs sm:max-w-60 lg:my-2 lg:text-2xl md:max-w-96 lg:max-w-screen-lg ">
                    {el}
                  </li>{" "}
                  <div>
                    <input type="text" ref={editAnotation} />
                    <button onClick={() => editeAnnotation(index)}>send</button>
                    <button className="hover:shadow-lg ">
                      <GoPencil />
                    </button>
                  </div>
                  <button
                    className="bg-white w-14 h-8 lg:w-20 lg:h-9 lg:text-lg rounded-lg text-xs hover:shadow-lg"
                    onClick={() => deleteAnnotation(index)}
                  >
                    Clear
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
