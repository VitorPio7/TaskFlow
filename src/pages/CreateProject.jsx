import FormCreat from "../components/FormCreat";
import { useRef, useState } from "react";

export default function CreateProject() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  const [projectInfo, setProjectInfo] = useState({
    title: "",
    descriptionRef: "",
    dueDateRef: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    console.log(title, description, dueDate);
    setProjectInfo({
      title: title,
      descriptionRef: description,
      dueDateRef: dueDate,
    });
    console.log(projectInfo);
  };

  return (
    <>
      <h1>Create your project</h1>
      <FormCreat
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        dueDateRef={dueDateRef}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
