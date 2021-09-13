import React from 'react';
import classNames from 'classnames';
import TextWithIcon from "../UI/Text/TextWithIcon";
import CircleSvg from "../UI/Icons/CircleSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";
import './Lists.scss'

const Lists = ({ tasks, removeTask, setActiveList }) => {
    return (
        <>
            {Array.isArray(tasks) &&
                tasks.map(task => (
                    <div
                        key={task.title}
                        className={classNames('lists-list', { '_active': task.active })}
                    >
                        <div
                            className="lists-list__text"
                            onClick={() => setActiveList(task)}
                        >
                            <TextWithIcon
                                text={task.title}
                                icon={CircleSvg}
                                color={task.color}
                            />
                        </div>
                        <div
                            onClick={() => removeTask(task)}
                            className="lists-list__remove-button"
                        >
                            {RemoveSvg}
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Lists;