import React, { useState } from 'react';
import classNames from 'classnames';
import StatusList from './StatusList';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";
import './Tasks.scss';

const Tasks = ({ activeTaskList, addTaskList, addStatus }) => {
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');
    const [openedStatusTask, setOpenedStatusTask] = useState('');
    const [openedTask, setOpenedTask] = useState(false);

    const resetOpened = () => {
        setOpenedTask(false);
        setOpenedStatusTask('');
    }

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
                    <div
                        onClick={(e) => {
                            if (!setOpenedStatusTask) {
                                return;
                            }
                            setOpenedStatusTask(e.currentTarget.outerText);
                            setOpenedTask(true);
                        }}
                        key={task.title}
                        className={classNames(
                            'tasks__item',
                            { 
                                '_ok': (task.status === 'ok'),
                                '_cancel': (task.status === 'cancel'),
                            }
                        )}
                    >
                        <div className={classNames(
                            'tasks__item-text',
                            {
                                '_blur': (task.title === openedStatusTask && openedTask)
                            })}>
                            {task.title}
                        </div>
                        {
                            (openedStatusTask === task.title && openedTask)
                                ?
                                <StatusList resetOpened={resetOpened} opened={true} addStatus={addStatus} openedStatusTask={openedStatusTask} />
                                :
                                <StatusList resetOpened={resetOpened} opened={false} addStatus={addStatus} openedStatusTask={openedStatusTask} />
                        }

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
                                onClick={() => {
                                    addTaskList({
                                        'title': listInputTitle,
                                        'status': '',
                                    });
                                }}
                            >Добавить</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Tasks;