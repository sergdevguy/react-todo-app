import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";
import './Button.scss'

const Button = ({ addTask, getUserTaskColor }) => {
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');
    const [listInputColor, setListInputColor] = useState('#000000');
    const [emptyInputError, setEmptyInputError] = useState(false);
    const inputRef = useRef(null);

    const resetPopup = () => {
        setListInputTitle('');
        setListInputColor('#000000');
        setAddListButtonOpened(false);
        setEmptyInputError(false);
    }

    return (
        <>
            <div
                className="button__add"
                onClick={() => setAddListButtonOpened(!addListButtonOpened)}
            >
                <TextWithIcon
                    text='Добавить группу'
                    icon={AddSvg}
                />
            </div>
            {
                addListButtonOpened &&
                <>
                    <div className="button__screen-hider"></div>
                    <div className="button__popup">
                        <div
                            onClick={() => resetPopup()}
                            className="button__popup-close"
                        >
                            {RemoveSvg}
                        </div>
                        <input
                            autoFocus
                            className={classNames('button__popup-item input', { '_error': emptyInputError })}
                            onChange={(e) => setListInputTitle(e.target.value)}
                            value={listInputTitle}
                            type="text"
                            placeholder="Введите название группы"
                            ref={inputRef}
                        />
                        <label className="button__popup-item">
                            Выбери цветовую тему списка:{' '}
                            <label>
                                <input
                                    onChange={(e) => setListInputColor(e.target.value)}
                                    value={listInputColor}
                                    type="color"
                                />
                            </label>
                        </label>
                        <button
                            className="button__popup-item button"
                            onClick={() => {
                                if (!listInputTitle) {
                                    setEmptyInputError(true);
                                    inputRef.current.focus();
                                    return;
                                }
                                addTask({
                                    title: listInputTitle.trim(),
                                    color: listInputColor,
                                    active: true,
                                    list: [],
                                });
                                resetPopup();
                            }
                            }>Добавить</button>
                    </div>
                </>
            }
        </>
    );
}

export default Button;