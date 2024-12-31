import MainButton from "./elements/MainButton";
export default function EditTask({ value, event, onchange, children }) {
  return (
    <div className=" flex gap-2 w-full">
      <textarea
        type="text"
        value={value}
        onChange={onchange}
        className=" text-xs lg:text-xl p-1 border rounded lg:w-9/12 lg:h-max "
      />
      <MainButton event={event} color="bg-yellow" hover="bg-yellow2">
        {children}
      </MainButton>
    </div>
  );
}
