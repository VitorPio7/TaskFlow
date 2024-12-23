export default function Sidebar({ name, children, data }) {
  return (
    <aside>
      <h1>{name}</h1>
      <button>{children}</button>
      {/* {data.map((el, index) => {
        return <button key={index}>{el}</button>;
      })} */}
      <button>myButton</button>
    </aside>
  );
}
