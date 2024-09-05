import React from 'react';
import { useNavigate } from 'react-router-dom';

const Task = ({ tasks, deleteTask }) => {
    const navigate = useNavigate();

    function editTask(task) {
        navigate('/edit-task', { state: { task } });
    }

    return (
        <div>
            <h2>My Tasks</h2>
            {tasks.length > 0 ? tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.name}</h3>
                    <p>{task.taskDesc}</p>
                    <button onClick={() => editTask(task)}>Edit Task</button>
                    <button onClick={() => deleteTask(task.id)}>Delete Task</button>
                </div>
            )) : (
                <div>
                    <h3>No tasks to display</h3>
                </div>
            )}
            <button onClick={() => navigate('/add-task')}>Add Task</button>
        </div>
    );
};

export default Task;
