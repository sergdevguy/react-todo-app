import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function AppRefactoring() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("todo")) || []);
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        return setTasks([task, ...tasks]);
    }

    const removeTask = (task) => {
        const filteredTasks = tasks.filter((item) => {
            return (item.title !== task.title);
        });
        return setTasks([...filteredTasks]);
    }

    return (
        <div className="todo">
            <Sidebar addTask={addTask} removeTask={removeTask} tasks={tasks} />
            <div className="todo__tasks">...</div>
        </div>
    )
}

export default AppRefactoring;
