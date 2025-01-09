import { useParams } from "react-router";
import { useOutletContext, useNavigate } from "react-router";
import { useState } from "react";
import InfoProject from "../components/InfoProject";
import EditTask from "../components/EditTask";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default function ProjectDetail() {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [openBox, setopenBox] = useState(false);
  const { formCreate, dispatch } = useOutletContext();
  const myParams = useParams();
  const navitage = useNavigate();
  let arrData = formCreate?.find((el) => String(el?.id) === myParams.id);

  const deleteProject = (id) => {
    dispatch({ type: "DELETE_PROJECT", idProject: id });
    navitage("/noProject");
  };

  const addAnnotation = (e) => {
    e.preventDefault();
    const annotaitionValue = e.target.elements.annotationInput.value.trim();
    if (!annotaitionValue) return;
    dispatch({
      type: "ADD_ANNOTATION2",
      info: { params: myParams.id, annotaitionValue: annotaitionValue },
    });

    e.target.elements.annotationInput.value = "";
  };

  const deleteAnnotation = (e) => {
    dispatch({
      type: "DELETE_ANNOTATION",
      info: { event: e, params: myParams.id },
    });
  };

  const editAnnotation = () => {
    if (!editValue.trim()) return;

    dispatch({
      type: "EDIT_ANNOTATION",
      info: { editIndex: editIndex, editValue: editValue, params: myParams.id },
    });
    setEditIndex(null);
    setEditValue("");
    setopenBox(false);
  };

  return (
    <>
      <div className="w-screen   p-3 lg:p-9 lg:w-2/3">
        <InfoProject
          title={arrData?.title}
          date={arrData?.date}
          description={arrData?.description}
          eventDelete={() => deleteProject(arrData.id)}
        >
          Tasks
        </InfoProject>
        <AddTask onsubmit={addAnnotation}>Add task</AddTask>
        <div>
          <ul>
            {arrData?.anotation?.map((el, index) => {
              return (
                <div
                  className=" flex flex-row my-2 gap-1 lg:gap-7 items-center lg:my-3 "
                  key={index}
                >
                  {editIndex === index ? (
                    <EditTask
                      value={editValue}
                      onchange={(e) => setEditValue(e.target.value)}
                      event={editAnnotation}
                    >
                      Send
                    </EditTask>
                  ) : (
                    <Tasks
                      eventDelete={() => deleteAnnotation(index)}
                      eventChange={() => {
                        setEditIndex(index);
                        setEditValue(el);
                        setopenBox(true);
                      }}
                    >
                      {el}
                    </Tasks>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
