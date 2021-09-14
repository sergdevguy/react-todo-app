import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';

function AppRefactoring() {
    const [tasks, setTasks] = useState([]);
    const [activeTaskList, setActiveTaskList] = useState([]);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("todo")) || []);
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(tasks));
        filterActiveTask(tasks);
    }, [tasks]);

    // sidebar
    const addTask = (task) => {
        resetActive();
        return setTasks([task, ...tasks]);
    }

    const removeTask = (task) => {
        const filteredTasks = tasks.filter((item) => {
            return (item.title !== task.title);
        });
        setActiveTaskList([]);
        return setTasks([...filteredTasks]);
    }

    const resetActive = () => {
        const filteredTasks = tasks.map((item) => {
            item.active = false;
            return item;
        });
        return setTasks([...filteredTasks]);
    }

    const setActiveList = (task) => {
        const filteredTasks = tasks.map((item) => {
            if (item.title === task.title) {
                item.active = true;
            } else {
                item.active = false;
            }
            return item;
        });
        return setTasks([...filteredTasks]);
    }

    // list
    const filterActiveTask = (list) => {
        const tasksList = list.filter(item => item.active);
        const tasksListTasks = tasksList[0]?.list;
        if (!tasksListTasks) {
            return;
        }
        return setActiveTaskList(tasksListTasks);
    }

    const addTaskList = (list) => {
        const tasksWithList = tasks.map(item => {
            if (!item.active) {
                return item;
            }
            item.list = list;
            return item;
        });
        return setTasks([...tasksWithList]);
    }

    return (
        <div className="todo">
            <Sidebar
                tasks={tasks}
                addTask={addTask}
                removeTask={removeTask}
                setActiveList={setActiveList}
            />
            {
                tasks.length
                    ?
                    <>
                        <div className="todo__hr"></div>
                        <Tasks
                            addTaskList={addTaskList}
                            activeTaskList={activeTaskList}
                        />
                    </>
                    : ''
            }
        </div>
    )
}

export default AppRefactoring;
