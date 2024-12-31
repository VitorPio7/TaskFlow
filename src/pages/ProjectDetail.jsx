import { useParams } from "react-router";
import { useOutletContext, useNavigate } from "react-router";
import { useState } from "react";
import { GoPencil } from "react-icons/go";
import { PiBroomLight } from "react-icons/pi";

export default function ProjectDetail() {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [openBox, setopenBox] = useState(false);
  const { formCreate, setFormCreate } = useOutletContext();
  const myParams = useParams();
  const navitage = useNavigate();
  let arrData = formCreate?.find((el) => String(el?.id) === myParams.id);

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
    const annotaitionValue = e.target.elements.annotationInput.value.trim();
    if (!annotaitionValue) return;
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

    e.target.elements.annotationInput.value = "";
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
        return project;
      });
    });
  };

  const editAnnotation = () => {
    if (!editValue.trim()) return;

    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project?.id) === myParams.id) {
          return {
            ...project,
            anotation: project?.anotation.map((el, index) =>
              index === editIndex ? editValue : el
            ),
          };
        }
        return project;
      });
    });
    setEditIndex(null);
    setEditValue("");
    setopenBox(false);
  };

  return (
    <>
      <div className="w-screen  p-3 lg:p-9 lg:w-2/3">
        <div className="flex flex-1 gap-1 lg:gap-40  items-center w-full">
          <h1 className=" text-2xl  w-40  mt-1 mb-0 sm:text-2xl lg:w-96 lg:text-6xl font-bold m">
            {arrData?.title}
          </h1>

          <button
            className="bg-red font-bold w-16 h-8 text-xs text-white rounded-lg lg:text-lg lg:w-40 lg:h-11 hyphens-auto shadow-md hover:bg-red2 hover:text-white"
            onClick={() => deleteProject(arrData.id)}
          >
            Delete
          </button>
        </div>
        <p className=" lg:my-2 text-sm lg:text-lg xl:2xl lg:3xl">
          {arrData?.date}
        </p>
        <p className="max-w-44 my-2  text-justify  sm:max-w-60 lg:my-2 lg:text-lg md:max-w-96 lg:max-w-screen-lg mt-2 text-sm lg:mt-5 xl:2xl lg:2xl">
          {arrData?.description}
        </p>
        <h1 className="text-base font-bold lg:mt-5 lg:text-4xl ">Tasks</h1>
        <form
          onSubmit={addAnnotation}
          className="max-w-44 flex gap-2 sm:max-w-60 md:max-w-96 lg:max-w-screen-lg"
        >
          <input
            className="bg-light-gray bg-gray-50 border px-2 border-gray-300 text-gray-900 text-xs sm:w-56 md:w-96 lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 lg:w-128  "
            type="text"
            maxLength="600"
            placeholder="max-600"
            name="annotationInput"
          />

          <button
            className="bg-yellow text-white font-bold w-16 text-xs lg:w-40 rounded-lg lg:text-lg  hover:shadow-lg hover:bg-yellow2 lg:ml-5 lg:h-11"
            type="submit"
          >
            Add Task
          </button>
        </form>
        <div>
          <ul>
            {arrData?.anotation?.map((el, index) => {
              return (
                <div
                  className=" flex flex-row my-2 gap-1 lg:gap-7 items-center lg:my-3 "
                  key={index}
                >
                  {editIndex === index ? (
                    <div className=" flex gap-2 w-full">
                      <textarea
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className=" text-xs lg:text-xl p-1 border rounded lg:w-9/12 lg:h-max "
                      />
                      <button
                        onClick={editAnnotation}
                        className="bg-yellow text-white w-14 h-8 lg:w-20 lg:h-9 lg:text-lg rounded-lg text-xs hover:shadow-lg hover:bg-yellow2"
                      >
                        Send
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 content-center items-end">
                      {" "}
                      <li className="max-w-44 my-2  text-justify text-xs sm:max-w-60 lg:my-2 lg:text-2xl md:max-w-96 lg:max-w-screen-lg ">
                        {el}
                      </li>{" "}
                      <div className="flex flex-row gap-2">
                        <button
                          onClick={() => {
                            setEditIndex(index);
                            setEditValue(el);
                            setopenBox(true);
                          }}
                          className=" bg-green  flex justify-center align-middle w-8 h-8 lg:w-9 lg:h-9 lg:text-lg rounded-lg text-xs hover:bg-green2 hover:shadow-lg"
                        >
                          <GoPencil className="h-full text-white" />
                        </button>
                        <button
                          className="bg-red flex justify-center text-white w-8 h-8 lg:w-9 lg:h-9 lg:text-lg rounded-lg text-xs hover:shadow-lg hover:bg-red2"
                          onClick={() => deleteAnnotation(index)}
                        >
                          <PiBroomLight className="h-full text-white" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
