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
      <div className=" p-9 w-2/3">
        <div className="flex flex-1 gap-40  items-center w-full">
          <h1 className="text-6xl font-bold">{arrData?.title}</h1>
          <button
            className="bg-black text-white rounded-lg w-40 h-10 shadow-md hover:bg-gray2 hover:text-black"
            onClick={() => deleteProject(arrData.id)}
          >
            Delete
          </button>
        </div>
        <p>{arrData?.date}</p>
        <p>{arrData?.description}</p>
        <div>
          <input
            className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 "
            type="text"
            ref={anotationRef}
          />
          <button onClick={addAnnotation}>Add Task</button>
        </div>
        <div>
          <ul>
            {arrData?.anotation?.map((el, index) => {
              return (
                <div className="flex flex-row gap-2" key={index}>
                  <li>{el}</li>{" "}
                  <button onClick={() => deleteAnnotation(index)}>Clear</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
