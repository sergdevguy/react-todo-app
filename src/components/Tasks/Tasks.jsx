import React, { useState } from 'react';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";
import './Tasks.scss';

const Tasks = ({ activeTaskList, addTaskList }) => {
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');

    return (
        <div className="tasks">
            {
                !activeTaskList.length
                    ?
                    <div className="tasks__no-tasks">Задач пока нет</div>
                    :
                    ""
            }
            {
                activeTaskList &&
                activeTaskList.map((task) => (
                    <div key={task}>
                        {task}
                    </div>
                ))
            }
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
                                onClick={() => addTaskList([listInputTitle, ...activeTaskList])}
                            >Добавить</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Tasks;