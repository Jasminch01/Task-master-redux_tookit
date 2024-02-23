import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/task/taskSlice";
import MyTaskDetailsModal from "./MyTaskDetailsModal";

const MyTasks = () => {
  const { task, userSpicificTask } = useSelector((state) => state.taskReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const { userName } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTasks(userName));
  }, [userName, dispatch, task]);

  const handleDetailsOpen = (id) => {
    setIsOpen(!isOpen);
    setTaskId(id);
  };

  return (
    <div>
      <MyTaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} taskId={taskId}/>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpicificTask.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.name}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetailsOpen(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
