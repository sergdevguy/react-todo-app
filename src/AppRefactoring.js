import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function AppRefactoring() {
    const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem("todo")));

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("todo")));
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(tasks));
    }, [tasks]);

    const setStorageObj = (task) => {
        return setTasks([task, ...tasks]);
    }

    return (
        <div className="todo">
            <Sidebar setStorageObj={setStorageObj} tasks={tasks} />
            <div className="todo__tasks"></div>
        </div>
    )
}

export default AppRefactoring;
