/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanColumn from './KanbanColumn';
import AddTaskModal from './AddTaskModal';
import axios from 'axios';
import Navbar from './Navbar';

const API_URL = 'http://localhost:3000/tasks';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post(API_URL, task);
    setTasks([...tasks, response.data]);
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`${API_URL}/${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const moveTask = async (id, status) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    const updatedTask = { ...taskToUpdate, status };
    await axios.put(`${API_URL}/${id}`, updatedTask);
    fetchTasks();
  };

  const groupedTasks = tasks.reduce((acc, task) => {
    acc[task.status] = acc[task.status] || [];
    acc[task.status].push(task);
    return acc;
  }, {});

  return (
    <>
      <Navbar onAddTask={() => setShowModal(true)} />
      <DndProvider backend={HTML5Backend}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6 px-3 mt-10'>
          {['Backlog', 'On Progress', 'Done'].map((status) => (
            <KanbanColumn key={status} title={status} tasks={groupedTasks[status] || []} moveTask={moveTask} deleteTask={deleteTask} />
          ))}
        </div>
        {showModal && (
          <AddTaskModal
            onClose={() => setShowModal(false)}
            onSave={(task) => {
              addTask(task);
              setShowModal(false);
            }}
          />
        )}
      </DndProvider>
    </>
  );
};

export default KanbanBoard;
