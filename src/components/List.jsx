import HeadList from "./components2/HeadList";
import Form from "./components2/Form";
import TaskList from "./components2/TaskList";

export default function List() {
  let date = new Date();

  return (
    <>
      <HeadList title="Learning React" date={date.getDate()} />
      <Form />
      <TaskList />
    </>
  );
}
