import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onsubmit = (data) => {
    console.log(data);
    onCancel()
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="rounded w-full"
            id="title"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="discription" className="mb-2">
            Discription
          </label>
          <input
            className="rounded w-full"
            id="discription"
            type="text"
            {...register("discription")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="discription" className="mb-2">
            Deadline
          </label>
          <input
            className="rounded w-full"
            id="date"
            type="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="discription" className="mb-2">
            Assign to
          </label>
          <select
            className="rounded w-full"
            id="assignto"
            {...register("assignto")}
          >
            <option value="jesmin chakma">Jesmin chakma</option>
            <option value="kalin chakma">Kalin chakma</option>
            <option value="anutosh chakma">Anutosh chakma</option>
            <option value="mikle chakma">Mikle chakma</option>
            <option value="Shamol bikas chakma">Shamol bikas chakma</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="discription" className="mb-2">
            Pirority
          </label>
          <select
            className="rounded w-full"
            id="priority"
            {...register("priority")}
          >
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => {
              onCancel();
            }}
            className="py-2 px-3 bg-red-500 rounded text-white"
            type="submit"
          >
            Cancel
          </button>
          <button
            className="py-2 px-3 bg-green-500 rounded text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
