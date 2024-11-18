/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = 'TASK';

const TaskCard = ({ task, onDelete }) => {
  const [, drag] = useDrag({
    type: ItemType,
    item: { id: task.id, status: task.status },
  });

  return (
    <div ref={drag} className='card bg-base-100 shadow-md' style={{ cursor: 'grab' }}>
      <div className='card-body'>
        <h2 className='card-title'>{task.title}</h2>
        <p>{task.description}</p>
        <div className='badge badge-outline'>{task.tag}</div>
        <div className='text-sm text-gray-500 mt-2'>
          {task.startDate} - {task.endDate}
        </div>
        <button className='btn btn-error btn-xs mt-2' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
