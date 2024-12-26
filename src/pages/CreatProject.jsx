import { useOutletContext } from "react-router";

export default function CreatProject() {
  const { titleRef, descriptionRef, dueDateRef, handleSubmit, formCreate } =
    useOutletContext();

  console.log(formCreate);
  return (
    <form className="flex flex-col justify-items-center align-items-center p-8 w-7/12 gap-y-3">
      <div className="flex flex-row justify-end gap-3">
        <button className="rounded-lg w-24 h-9 shadow-md hover:bg-gray2">
          Cancel
        </button>
        <button
          className="rounded-lg text-white bg-blackLight  w-24 h-9 shadow-md hover:bg-black "
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        TITLE
        <input
          className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          type="text"
          ref={titleRef}
          id="title"
        />
      </label>

      <label>
        DESCRIPTION
        <textarea
          className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          ref={descriptionRef}
          id="description"
          rows="5"
          cols="33"
          maxLength="600"
        ></textarea>
      </label>

      <label>
        DUE DATE
        <input
          className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          ref={dueDateRef}
          id="dueDate"
          type="date"
        />
      </label>
    </form>
  );
}
