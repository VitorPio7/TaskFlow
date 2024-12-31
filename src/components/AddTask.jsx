import MiniButton from "./elements/MiniButton";
export default function AddTask({ onsubmit, children }) {
  return (
    <form
      onSubmit={onsubmit}
      className="max-w-48- flex gap-2 sm:max-w-60 md:max-w-96 lg:max-w-screen-lg"
    >
      <input
        className="bg-light-gray bg-gray-50 border px-2 border-gray-300 text-gray-900 text-xs sm:w-56 md:w-96 lg:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 lg:w-128  "
        type="text"
        maxLength="600"
        placeholder="max-600"
        name="annotationInput"
      />

      <MiniButton color="bg-yellow">{children}</MiniButton>
    </form>
  );
}
