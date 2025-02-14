let MainButton = function MainButton({ children, color, event, hover }) {
  return (
    <button
      className={`${color} w-28 h-8 m-1 text-xs text-white rounded-lg lg:text-lg lg:w-40 lg:h-11 hyphens-auto shadow-md hover:${hover} hover:text-white`}
      onClick={event}
    >
      {children}
    </button>
  );
};
export default MainButton;
