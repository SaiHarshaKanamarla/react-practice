import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const navigate = useNavigate();
    const submitTask = (e) => {
        e.preventDefault();
        if (taskName.length === 0 || taskDesc.length === 0) {
            alert("Fields cannot be empty")
        } else {
            addTask({ name: taskName, taskDesc: taskDesc });
            navigate('/');
        }
    };

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Add a New Task</h1>
            <input
                type='text'
                name="taskName"
                placeholder='Task Name'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type='text'
                name="taskDesc"
                placeholder='Task Desc'
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                required
            />
            <button onClick={submitTask}>Submit</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default AddTask;
