export default function TinyButton({ children, color, event, hover }) {
  return (
    <button
      onClick={event}
      className={`${color}  flex justify-center align-middle w-8 h-8 lg:w-9 lg:h-9 lg:text-lg rounded-lg text-xs hover:${hover} hover:shadow-lg`}
    >
      {children}
    </button>
  );
}
