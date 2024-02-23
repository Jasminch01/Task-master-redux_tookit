import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const MyTaskDetailsModal = ({ isOpen, setIsOpen, taskId }) => {
  const { task } = useSelector((state) => state.taskReducer);
  const detailsById = task.find((item) => item.id === taskId);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <p>{detailsById?.discription}</p>
    </Modal>
  );
};

export default MyTaskDetailsModal;
