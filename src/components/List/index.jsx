import React from 'react';
import classNames from 'classnames'
import axios from 'axios';

import removeSvg from '../../assets/img/remove.svg';

import Badge from '../Badge/';

import './List.scss';

const List = ({ items, onClick, isRemovable, onRemove, onClickItem, activeItem }) => {
    const removeList = (item) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            axios.delete('http://localhost:3001/lists/' + item.id)
                .then(() => {
                    onRemove(item.id);
                })
        }
    }

    return (
        <ul onClick={onClick} className="list">
            {Array.isArray(items) &&
                items.map(item => (
                    <li
                        key={item.name}
                        className={classNames(item.className, {
                            active: item.active ? item.active : activeItem && activeItem === item.id
                        })}
                        onClick={onClickItem ? () => onClickItem(item) : null
                        }
                    >
                        <i>
                            {item.icon
                                ? item.icon
                                : <Badge color={item.color.name} />
                            }
                        </i>
                        <span>
                            {item.name}
                            {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
                        </span>
                        {isRemovable && (
                            <img
                                className="list__remove-icon"
                                src={removeSvg}
                                alt="remove icon"
                                onClick={() => removeList(item)}
                            />
                        )}
                    </li>
                ))
            }
        </ul>
    )
}

export default List;