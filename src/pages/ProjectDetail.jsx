import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import { useRef, useState } from "react";
import { Navigate } from "react-router";

export default function ProjectDetail() {
  const { formCreate, setFormCreate } = useOutletContext();
  const [changeBoolean, setChangeBoolean] = useState(false);
  const myParams = useParams();
  let anotationRef = useRef();
  let arrData = formCreate?.find((el) => String(el.id) === myParams.id);

  const deleteProject = (id) => {
    setFormCreate((prevValue) => {
      return prevValue.filter((el) => {
        return id !== el.id;
      });
    });
    setChangeBoolean(true);
  };

  const addAnnotation = (e) => {
    e.preventDefault();
    const annotaitionValue = anotationRef.current.value;
    if (!annotaitionValue.trim()) return;
    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project.id) === myParams.id) {
          return {
            ...project,
            anotation: [...project.anotation, annotaitionValue],
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
        if (String(project.id) === myParams.id) {
          return {
            ...project,
            anotation: project.anotation.filter((el, index) => index !== e),
          };
        }
      });
    });
  };
  if (changeBoolean === true) {
    <Navigate to="/" />;
  }
  return (
    <>
      <div className=" p-3 lg:p-9 lg:w-2/3">
        <div className="flex flex-1 gap-1 lg:gap-40  items-center w-full">
          <h1 className=" text-2xl  w-40  mt-1 mb-0 lg:text-6xl font-bold m">
            {arrData?.title}
          </h1>
          <button
            className="bg-black w-16 h-8 text-xs text-white rounded-lg  lg:w-40 lg:h-11 hyphens-auto shadow-md hover:bg-gray2 hover:text-black"
            onClick={() => deleteProject(arrData.id)}
          >
            Delete
          </button>
        </div>
        <p className=" lg:my-2 text-sm lg:2xl">{arrData?.date}</p>
        <p className="lg:my-2 text-sm mt-8 lg:2xl">{arrData?.description}</p>
        <h1 className="text-base font-bold lg:mt-5 lg:text-4xl ">Tasks</h1>
        <div className="flex gap-2">
          <input
            className="bg-light-gray bg-gray-50 border p-2.5 border-gray-300 text-gray-900 text-xs lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 lg:w-96 lg:p-2.5 "
            type="text"
            maxLength="600"
            ref={anotationRef}
          />
          <button
            className="bg-light-gray  w-16 text-xs lg:w-32 rounded-lg   hover:shadow-lg"
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
                  className="flex flex-row gap-7 items-center my-3"
                  key={index}
                >
                  <li className="text-justify my-2 text-2xl max-w-screen-lg ">
                    {el}
                  </li>{" "}
                  <button
                    className="bg-white w-20 h-9 rounded-lg   hover:shadow-lg"
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
