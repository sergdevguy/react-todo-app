import React, { useState, useEffect } from 'react';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";

const Tasks = ({ tasks, addTaskList }) => {
    const [activeTasks, setActiveTasks] = useState(tasks);
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');

    useEffect(() => {
        if (tasks.length === 0) {
            return;
        }
        const fileredTasks = tasks.filter(item => item.active)[0].list;
        setActiveTasks(fileredTasks);
    }, [tasks]);

    return (
        <div className="tasks">
            {activeTasks &&
                activeTasks.map((task) => (
                    task
                ))}
            <div
                onClick={() => {
                    setAddListButtonOpened(true);
                }}
                className="tasks__button"
            >
                {
                    !addListButtonOpened
                        ?
                        <div className="tasks__button-item">
                            <TextWithIcon
                                text='Добавить задачу'
                                icon={AddSvg}
                            />
                        </div>
                        :
                        <div className="tasks__button-item">
                            <input
                                onChange={(e) => setListInputTitle(e.target.value)}
                                value={listInputTitle}
                                type="text"
                                placeholder="Введите задачу"
                            />
                            <button
                                onClick={addTaskList([...activeTasks])}
                            >Добавить</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Tasks;