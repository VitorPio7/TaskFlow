export default function HeadList({ title, date, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <button>Delete</button>
    </>
  );
}
