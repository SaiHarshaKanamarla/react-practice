import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditTask = ({ updatedTask }) => {
    const location = useLocation();
    const { task } = location.state || {};
    const navigate = useNavigate();
    const [name, setName] = useState(task ? task.name : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    if (!task) {
        return <div>No task data available</div>;
    }

    const navigateBack = () => {
        navigate(-1)
    }

    const saveTask = () => {
        const changedTask = {
            ...task,
            name,
            taskDesc
        };
        updatedTask(changedTask);
        navigate('/');
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <input type="text" defaultValue={task.name} onChange={(e) => setName(e.target.value)} />
            <input type="text" defaultValue={task.taskDesc} onChange={(e) => setTaskDesc(e.target.value)} />
            <button onClick={saveTask}>Save Task</button>
            <button onClick={navigateBack}>Go Back</button>
        </div>
    );
};

export default EditTask;
