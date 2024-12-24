import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import { useRef } from "react";

export default function ProjectDetail() {
  // let callId = useId();
  // let [anotation, setAnotation] = useState([{ id: "", message: "" }]);
  // function attAnotation(e) {
  //   setAnotation((prevValue) => {
  //     return [...prevValue, { id: callId, message: e.target.value }];
  //   });
  // }
  const { formCreate, setFormCreate } = useOutletContext();
  const myParams = useParams();
  let anotationRef = useRef();

  const addAnnotation = (e) => {
    e.preventDefault();
    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project.id) === myParams.id) {
          return {
            ...project,
            anotation: [
              ...(project.anotation || []),
              anotationRef.current.value,
            ],
          };
        }
        return project;
      });
    });
    anotationRef.current.value = "";
  };
  console.log("formCreat" + formCreate);
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
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
