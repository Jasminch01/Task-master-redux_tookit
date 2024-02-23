import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/task/taskSlice';

const TaskCard = ({item}) => {
  const dispatch = useDispatch()
  let statusUpdate;

if (item.status === 'panding') {
  statusUpdate = 'running'
} else if (item.status === 'running'){
  statusUpdate = 'done'
}else{
  statusUpdate = 'archive'
}

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          item.priority === 'high' ? 'text-red-500' : ''
        } ${item.priority === 'medium' ? 'text-yellow-500' : ''} ${
          item.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {item?.name}
      </h1>
      <p className="mb-3">{item?.discription}</p>
      <p className="text-sm">Assigned to - {item?.assignto}</p>
      <div className="flex justify-between mt-3">
        <p>{item?.date}</p>
        <div className="flex gap-3">
          <button 
          onClick={() => dispatch(removeTask(item.id))} 
          title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({id : item.id, status: statusUpdate }))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
