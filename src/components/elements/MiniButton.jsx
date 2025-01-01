export default function MiniButton({ children, color, event }) {
  return (
    <button
      className={`${color} text-white w-28 text-xs m  lg:w-40 rounded-lg  lg:text-lg  hover:shadow-lg hover:bg-yellow2 lg:ml-5 lg:h-11`}
      type="submit"
      onClick={() => event}
    >
      {children}
    </button>
  );
}
