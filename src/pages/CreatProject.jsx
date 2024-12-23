import { useState, useRef } from "react";

export default function CreatProject() {
  let [formCreate, setFormCreate] = useState([]);

  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let dueDateRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let date = dueDateRef.current.value;
    setFormCreate((prevValue) => {
      return [
        ...prevValue,
        {
          id: prevValue.length,
          title: title,
          description: description,
          date: date,
          anotations: [],
        },
      ];
    });
  };
  return (
    <div className="grid grid-cols-2">
      <aside>
        <h1>YOUR PROJECTS</h1>
        <button>+ Add Project</button>
        <div className="grid grid-cols-1 cursor-pointer">
          {formCreate.map((el, index) => {
            return <li key={index}>{el.title}</li>;
          })}
        </div>
      </aside>
      <form className="grid grid-cols-1">
        <button>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
        <label className="block" htmlFor="title">
          TITLE
        </label>
        <input type="text" ref={titleRef} id="title" />
        <label htmlFor="description">DESCRIPTION</label>
        <textarea
          ref={descriptionRef}
          id="description"
          rows="5"
          cols="33"
        ></textarea>
        <label htmlFor="dueDate">DUE DATE</label>
        <input ref={dueDateRef} id="dueDate" type="date" />
      </form>
    </div>
  );
}
