import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Task from './Task';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Task Component', () => {
    const mockDeleteTask = jest.fn();
    const navigate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        useNavigate.mockReturnValue(navigate);
    });

    test('renders tasks correctly', () => {
        const tasks = [
            { id: 1, name: 'Task 1', taskDesc: 'Description 1' },
            { id: 2, name: 'Task 2', taskDesc: 'Description 2' },
        ];

        render(<Task tasks={tasks} deleteTask={mockDeleteTask} />);

        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Description 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.getByText('Description 2')).toBeInTheDocument();
    });

    test('displays message when no tasks are present', () => {
        render(<Task tasks={[]} deleteTask={mockDeleteTask} />);

        expect(screen.getByText('No tasks to display')).toBeInTheDocument();
    });

    test('calls editTask when edit button is clicked', () => {
        const tasks = [{ id: 1, name: 'Task 1', taskDesc: 'Description 1' }];

        render(<Task tasks={tasks} deleteTask={mockDeleteTask} />);

        const editButton = screen.getByText('Edit Task');
        fireEvent.click(editButton);
        expect(navigate).toHaveBeenCalledWith('/edit-task', { state: { task: tasks[0] } });
    });

    test('calls deleteTask when delete button is clicked', () => {
        const tasks = [{ id: 1, name: 'Task 1', taskDesc: 'Description 1' }];

        render(<Task tasks={tasks} deleteTask={mockDeleteTask} />);

        const deleteButton = screen.getByText('Delete Task');
        fireEvent.click(deleteButton);
        expect(mockDeleteTask).toHaveBeenCalledWith(1);
    });

    test('navigates to add-task page when Add Task button is clicked', () => {
        const tasks = [{ id: 1, name: 'Task 1', taskDesc: 'Description 1' }];

        render(<Task tasks={tasks} deleteTask={mockDeleteTask} />);

        const addButton = screen.getByText('Add Task');
        fireEvent.click(addButton);
        expect(navigate).toHaveBeenCalledWith('/add-task');
    });
});
