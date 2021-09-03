import React, { useState } from 'react';
import axios from 'axios';

import addSvg from '../../assets/img/add.svg';

const AddTaskForm = ({ list, onAddTask }) => {
    const [visebleForm, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleFormVisible = () => {
        setFormVisible(!visebleForm);
        setInputValue('');
    };

    const addTask = () => {
        const obj = {
            'listId': list.id,
            'text': inputValue,
            'complited': false
        };

        axios.post('http://localhost:3001/tasks/', obj)
            .then(({ data }) => {
                onAddTask(list.id, data);
                toggleFormVisible();
            });
    };

    return (
        <div className="tasks__form">
            {!visebleForm ? (
                <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon" />
                    <span>Новая задача</span>
                </div>
            ) : (
                <div className="tasks__form-block">
                    <input
                        value={inputValue}
                        className="field"
                        type="text"
                        placeholder="Текст задачи"
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button onClick={addTask} className="button">Добавить задачу</button>
                    <button onClick={toggleFormVisible} className="button button--grey">Отмена</button>
                </div>
            )}
        </div>
    )
}

export default AddTaskForm;