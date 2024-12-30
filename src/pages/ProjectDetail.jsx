import { useParams } from "react-router";
import { useOutletContext, useNavigate } from "react-router";
import { useState } from "react";
import { GoPencil } from "react-icons/go";

export default function ProjectDetail() {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [openBox, setOpenBox] = useState(false);
  const { formCreate, setFormCreate } = useOutletContext();
  const myParams = useParams();
  const navigate = useNavigate();
  let arrData = formCreate?.find((el) => String(el?.id) === myParams.id);

  const deleteProject = (id) => {
    setFormCreate((prevValue) => prevValue.filter((el) => el.id !== id));
    navigate("/noProject");
  };

  const addAnnotation = (e) => {
    e.preventDefault();
    const annotaitionValue = e.target.elements.annotationInput.value.trim();
    if (!annotaitionValue) return;

    setFormCreate((prevValue) =>
      prevValue.map((project) =>
        String(project?.id) === myParams?.id
          ? { ...project, anotation: [...project.anotation, annotaitionValue] }
          : project
      )
    );
    e.target.elements.annotationInput.value = "";
  };

  const deleteAnnotation = (indexToDelete) => {
    setFormCreate((prevValue) =>
      prevValue.map((project) =>
        String(project?.id) === myParams.id
          ? {
              ...project,
              anotation: project.anotation.filter(
                (_, i) => i !== indexToDelete
              ),
            }
          : project
      )
    );
  };
  const editAnnotation = () => {
    if (!editValue.trim()) return;

    setFormCreate((prevValue) =>
      prevValue.map((project) =>
        String(project?.id) === myParams.id
          ? {
              ...project,
              anotation: project.anotation.map((el, i) =>
                i === editIndex ? editValue : el
              ),
            }
          : project
      )
    );

    setEditIndex(null);
    setEditValue("");
    setOpenBox(false);
  };

  return (
    <>
      <div className="p-3 lg:p-9 lg:w-2/3">
        <div className="flex flex-1 gap-1 lg:gap-40 items-center w-full">
          <h1 className="text-2xl w-40 mt-1 mb-0 sm:text-2xl lg:w-96 lg:text-6xl font-bold">
            {arrData?.title}
          </h1>

          <button
            className="bg-black w-16 h-8 text-xs text-white rounded-lg lg:text-lg lg:w-40 lg:h-11 shadow-md hover:bg-gray2 hover:text-black"
            onClick={() => deleteProject(arrData.id)}
          >
            Delete
          </button>
        </div>
        <p className="lg:my-2 text-sm lg:text-lg xl:2xl">{arrData?.date}</p>
        <p className="mt-2 lg:my-2 text-sm lg:text-lg lg:mt-5 xl:2xl">
          {arrData?.description}
        </p>
        <h1 className="text-base font-bold lg:mt-5 lg:text-4xl">Tasks</h1>
        <form onSubmit={addAnnotation} className="flex gap-2">
          <input
            className="bg-light-gray border p-2.5 text-gray-900 text-xs lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 lg:w-96"
            type="text"
            name="annotationInput"
            maxLength="600"
          />
          <button
            className="bg-light-gray w-16 text-xs lg:w-32 rounded-lg lg:text-lg hover:shadow-lg"
            type="submit"
          >
            Add Task
          </button>
        </form>
        <div>
          <ul>
            {arrData?.anotation?.map((el, index) => (
              <div
                className="flex flex-row my-2 gap-1 lg:gap-7 items-center"
                key={index}
              >
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="text-xs lg:text-xl p-1 border rounded"
                    />
                    <button onClick={editAnnotation} className="ml-2">
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <li className="text-xs lg:text-2xl">{el}</li>
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setEditValue(el);
                        setOpenBox(true);
                      }}
                    >
                      <GoPencil />
                    </button>
                  </>
                )}
                <button
                  className="bg-white w-14 h-8 lg:w-20 lg:h-9 lg:text-lg rounded-lg text-xs hover:shadow-lg"
                  onClick={() => deleteAnnotation(index)}
                >
                  Clear
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
