import React, { useState } from 'react';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";
import './Button.scss'

const Button = ({ addTask }) => {
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');
    const [listInputColor, setListInputColor] = useState('#000000');

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
                            text='Добавить список'
                            icon={AddSvg}
                        />
                    </div>
                    :
                    <div className="button__popup">
                        <input
                            className="button__popup-item"
                            onChange={(e) => setListInputTitle(e.target.value)}
                            value={listInputTitle}
                            type="text"
                            placeholder="Название списка"
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
                            className="button__popup-item"
                            onClick={() => {
                                addTask({
                                    title: listInputTitle,
                                    color: listInputColor,
                                })
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