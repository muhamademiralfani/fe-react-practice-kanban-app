/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AddTaskModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tag: 'Development',
    startDate: '',
    endDate: '',
    status: 'Backlog',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (form.title && form.description) {
      onSave(form);
      setForm({
        title: '',
        description: '',
        tag: 'Development',
        startDate: '',
        endDate: '',
        status: 'Backlog',
      });
    }
  };

  return (
    <div className='modal modal-open'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Add Task</h3>
        <div className='form-control'>
          <label className='label'>Title</label>
          <input name='title' type='text' className='input input-bordered' value={form.title} onChange={handleChange} />
        </div>
        <div className='form-control'>
          <label className='label'>Description</label>
          <textarea name='description' className='textarea textarea-bordered' value={form.description} onChange={handleChange} />
        </div>
        <div className='form-control'>
          <label className='label'>Start Date</label>
          <input name='startDate' type='date' className='input input-bordered' value={form.startDate} onChange={handleChange} />
        </div>
        <div className='form-control'>
          <label className='label'>End Date</label>
          <input name='endDate' type='date' className='input input-bordered' value={form.endDate} onChange={handleChange} />
        </div>
        <div className='form-control'>
          <label className='label'>Tag</label>
          <select name='tag' className='select select-bordered' value={form.tag} onChange={handleChange}>
            <option>Development</option>
            <option>Testing</option>
            <option>Design</option>
          </select>
        </div>
        <div className='modal-action'>
          <button className='btn' onClick={onClose}>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
