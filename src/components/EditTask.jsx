import MainButton from "./elements/MainButton";
export default function EditTask({ value, event, onchange, children }) {
  return (
    <div className=" flex flex-col md:flex-row gap-2 w-full">
      <textarea
        type="text"
        value={value}
        onChange={onchange}
        className=" text-xs max-w-80 h-64 lg:text-xl p-1 border rounded lg:w-9/12 lg:h-max "
      />
      <div className="self-end pr-3">
        <MainButton event={event} color="bg-yellow" hover="bg-yellow2">
          {children}
        </MainButton>
      </div>
    </div>
  );
}
