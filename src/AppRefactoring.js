import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function AppRefactoring() {
    let tasksFromStorage = JSON.parse(localStorage.getItem("todo")) || [];
    const [tasks, setTasks] = useState(tasksFromStorage);

    useEffect(() => {
        tasksFromStorage = JSON.parse(localStorage.getItem("todo"));
        setTasks(tasksFromStorage);
    }, []);

    const setStorageObj = (task) => {
        tasks ? setTasks([task, ...tasks]) : setTasks([task]);
        const serialTasks = JSON.stringify(tasks);
        localStorage.setItem("todo", serialTasks);
    }

    return (
        <div className="todo">
            <Sidebar setStorageObj={setStorageObj} tasks={tasks} />
            <div className="todo__tasks"></div>
        </div>
    )
}

export default AppRefactoring;
