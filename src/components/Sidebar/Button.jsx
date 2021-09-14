import React, { useState } from 'react';
import classNames from 'classnames';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";
import './Button.scss'

const Button = ({ addTask }) => {
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');
    const [listInputColor, setListInputColor] = useState('#000000');
    const [emptyInputError, setEmptyInputError] = useState(false);

    return (
        <>
            {
                !addListButtonOpened
                    ?
                    <div
                        className="button__add"
                        onClick={() => setAddListButtonOpened(!addListButtonOpened)}
                    >
                        <TextWithIcon
                            text='Добавить группу'
                            icon={AddSvg}
                        />
                    </div>
                    :
                    <div className="button__popup">
                        <input
                            className={classNames('button__popup-item input', { '_error': emptyInputError })}
                            onChange={(e) => setListInputTitle(e.target.value)}
                            value={listInputTitle}
                            type="text"
                            placeholder="Введите название группы"
                        />
                        <label className="button__popup-item">
                            Цвет:{' '}
                            <input
                                onChange={(e) => setListInputColor(e.target.value)}
                                value={listInputColor}
                                type="color"
                            />
                        </label>
                        <button
                            className="button__popup-item button"
                            onClick={() => {
                                if (!listInputTitle) {
                                    setEmptyInputError(true);
                                    return;
                                } 
                                addTask({
                                    title: listInputTitle,
                                    color: listInputColor,
                                    active: true,
                                    list: [],
                                });
                                setListInputTitle('');
                                setListInputColor('#000000');
                                setAddListButtonOpened(false);
                            }
                            }>Добавить</button>
                    </div>
            }
        </>
    );
}

export default Button;