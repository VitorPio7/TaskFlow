export default function MainButton({ children, color, event, hover }) {
  return (
    <button
      className={`${color}  font-bold w-16 h-8 text-xs text-white rounded-lg lg:text-lg lg:w-40 lg:h-11 hyphens-auto shadow-md hover:${hover} hover:text-white`}
      onClick={event}
    >
      {children}
    </button>
  );
}
