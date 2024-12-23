export default function FormCreat({
  titleRef,
  descriptionRef,
  dueDateRef,
  handleSubmit,
}) {
  return (
    <>
      <form>
        <button>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
        <label>
          TITLE
          <input type="text" ref={titleRef} />
        </label>
        <label>
          DESCRIPTION
          <textarea rows="4" cols="50" ref={descriptionRef}></textarea>
        </label>
        <label>
          DUE DATE
          <input type="date" ref={dueDateRef} />
        </label>
      </form>
    </>
  );
}
