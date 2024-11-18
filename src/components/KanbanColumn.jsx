/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const ItemType = "TASK";

const KanbanColumn = ({ title, tasks, moveTask, deleteTask }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item) => {
      if (item.status !== title) {
        moveTask(item.id, title);
      }
    },
  });

  return (
    <div className="flex-1" ref={drop}>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
