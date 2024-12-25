import { useOutletContext } from "react-router";

export default function CreatProject() {
  const { titleRef, descriptionRef, dueDateRef, handleSubmit, formCreate } =
    useOutletContext();

  console.log(formCreate);
  return (
    <form className="flex flex-col justify-items-center align-items-center">
      <button>Cancel</button>
      <button onClick={handleSubmit}>Save</button>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor="title"
      >
        TITLE
      </label>
      <input
        className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
        type="text"
        ref={titleRef}
        id="title"
      />
      <label htmlFor="description">DESCRIPTION</label>
      <textarea
        className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        ref={descriptionRef}
        id="description"
        rows="5"
        cols="33"
      ></textarea>
      <label htmlFor="dueDate">DUE DATE</label>
      <input
        className="bg-light-graybg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        ref={dueDateRef}
        id="dueDate"
        type="date"
      />
    </form>
  );
}
