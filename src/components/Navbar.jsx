/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Navbar = ({ onAddTask }) => (
  <div className='navbar bg-base-100 shadow-lg'>
    <div className='flex-1'>
      <a className='btn btn-ghost normal-case text-xl'>Kanban App</a>
    </div>
    <div className='flex-none'>
      <button className='btn btn-primary' onClick={onAddTask}>
        Add Task
      </button>
    </div>
  </div>
);

export default Navbar;
