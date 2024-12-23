import { NavLink } from "react-router";
export default function CreatProject({ img, text, title, buttonLink }) {
  return (
    <div className="container">
      <img src={img} alt="icon" />
      <h1>{title}</h1>
      <p>{text}</p>
      <NavLink to={buttonLink}>Create new Project</NavLink>
    </div>
  );
}
