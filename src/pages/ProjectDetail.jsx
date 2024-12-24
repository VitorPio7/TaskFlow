import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import { useState } from "react";

export default function ProjectDetail() {
  let [anotation, setAnotation] = useState([{ id: null, message: "" }]);
  function attAnotation(e) {
    setAnotation((prevValue) => {
      return [...prevValue, { id: prevValue.length, message: e.target.value }];
    });
  }
  const formCreate = useOutletContext();
  const params = useParams();

  let arrData = formCreate.find((el) => el.id === params);
  return (
    <>
      <div>
        <h1>{arrData.title}</h1>
        <p>{arrData.date}</p>
        <p>{arrData.description}</p>
        <div>
          <input type="text" value={anotation.message} />
          <button onClick={() => attAnotation}>Add Task</button>
        </div>
      </div>
    </>
  );
}
