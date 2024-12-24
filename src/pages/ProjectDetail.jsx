import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import { useRef } from "react";

export default function ProjectDetail() {
  const { formCreate, setFormCreate } = useOutletContext();
  const myParams = useParams();
  let anotationRef = useRef();

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
  let arrData = formCreate?.find((el) => String(el.id) === myParams.id);
  console.log(arrData);
  return (
    <>
      <div>
        <h1>{arrData?.title}</h1>
        <p>{arrData?.date}</p>
        <p>{arrData?.description}</p>
        <div>
          <input type="text" ref={anotationRef} />
          <button onClick={addAnnotation}>Add Task</button>
        </div>
        <div>
          <ul>
            {arrData?.anotation?.map((el, index) => {
              return (
                <div className="flex flex-row gap-2">
                  <li key={index}>{el}</li> <button>Clear</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
