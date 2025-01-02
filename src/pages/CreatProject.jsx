import { useOutletContext } from "react-router";

export default function CreatProject() {
  const { formCreate, titleRef, descriptionRef, dueDateRef, handleSubmit } =
    useOutletContext();

  console.log(formCreate);
  return (
    <div className="flex justify-center items-center h-full p-3">
      <form className="flex flex-col  content-center justify-center    w-60 lg:p-8 lg:w-144 lg:gap-y-3">
        <div className="flex flex-row justify-end gap-4 lg:gap-4">
          <button
            className="rounded-lg  text-white bg-green  text-sm w-16 h-7 lg:w-24 lg:h-9 shadow-md hover:bg-green2 "
            onClick={handleSubmit}
            type="submit"
          >
            Save
          </button>
        </div>
        <label className="block mt-2 mb-4 lg:mt-2 lg:mb-4 text-xs font-medium text-gray-900">
          TITLE
          <input
            className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            type="text"
            ref={titleRef}
            id="title"
            maxLength="12"
            placeholder="max-12"
            minLength="3"
          />
        </label>

        <label className="block mt-2 mb-4 lg:mt-2 lg:mb-4 text-xs font-medium text-gray-900">
          DESCRIPTION
          <textarea
            className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ref={descriptionRef}
            id="description"
            rows="5"
            cols="33"
            maxLength="600"
            placeholder="max-600"
          ></textarea>
        </label>

        <label className="block mt-2 mb-4 lg:mt-2 lg:mb-4 text-xs font-medium text-gray-900">
          DUE DATE
          <input
            className="bg-light-gray bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ref={dueDateRef}
            id="dueDate"
            type="date"
            placeholder="MM DD, YYYY"
            pattern="^(0[1-9]|1[0-2])\s(0[1-9]|[12][0-9]|3[01]),\s\d{4}$"
            required
          />
        </label>
      </form>
    </div>
  );
}
