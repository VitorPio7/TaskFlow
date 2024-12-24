import { useOutletContext } from "react-router";

export default function CreatProject() {
  const { titleRef, descriptionRef, dueDateRef, handleSubmit, formCreate } =
    useOutletContext();

  console.log(formCreate);
  return (
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
  );
}
