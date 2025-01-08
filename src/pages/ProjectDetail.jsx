import { useParams } from "react-router";
import { useOutletContext, useNavigate } from "react-router";
import { useState, useMemo, useCallback } from "react";
import InfoProject from "../components/InfoProject";
import EditTask from "../components/EditTask";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default function ProjectDetail() {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [openBox, setopenBox] = useState(false);
  const { formCreate, setFormCreate } = useOutletContext();
  const myParams = useParams();
  const navitage = useNavigate();

  let arrData = useMemo(() => {
    return formCreate?.find((el) => String(el?.id) === myParams.id);
  }, [formCreate]);

  let deleteProject = useCallback(
    function (id) {
      setFormCreate((prevValue) => {
        return prevValue.filter((el) => {
          return id !== el.id;
        });
      });
      navitage("/noProject");
    },
    [setFormCreate]
  );

  const addAnnotation = useCallback(
    (e) => {
      e.preventDefault();
      const annotaitionValue = e.target.elements.annotationInput.value.trim();
      if (!annotaitionValue) return;
      setFormCreate((prevValue) => {
        return prevValue.map((project) => {
          if (String(project?.id) === myParams?.id) {
            return {
              ...project,
              anotation: [...project?.anotation, annotaitionValue],
            };
          }
          return project;
        });
      });

      e.target.elements.annotationInput.value = "";
    },
    [arrData?.anotation]
  );

  const deleteAnnotation = useCallback(
    (e) => {
      setFormCreate((prevValue) => {
        return prevValue.map((project) => {
          if (String(project?.id) === myParams.id) {
            return {
              ...project,
              anotation: project.anotation.filter((el, index) => index !== e),
            };
          }
          return project;
        });
      });
    },
    [arrData?.anotation]
  );

  const editAnnotation = useCallback(() => {
    if (!editValue.trim()) return;

    setFormCreate((prevValue) => {
      return prevValue.map((project) => {
        if (String(project?.id) === myParams.id) {
          return {
            ...project,
            anotation: project?.anotation.map((el, index) =>
              index === editIndex ? editValue : el
            ),
          };
        }
        return project;
      });
    });
    setEditIndex(null);
    setEditValue("");
    setopenBox(false);
  }, []);

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
