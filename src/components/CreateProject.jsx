export default function CreatProject({ img, text, title, buttonText }) {
  return (
    <div className="container">
      <img src={img} alt="icon" />
      <h1>{title}</h1>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}
