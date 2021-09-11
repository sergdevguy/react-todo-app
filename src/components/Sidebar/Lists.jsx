import React from 'react';
import TextWithIcon from "../UI/Text/TextWithIcon";
import CircleSvg from "../UI/Icons/CircleSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";
import './Lists.scss'

const Lists = ({ tasks, removeTask }) => {
    return (
        <>
            {Array.isArray(tasks) &&
                tasks.map(task => (
                    <div key={task.title} className="lists-list">
                        <TextWithIcon
                            text={task.title}
                            icon={CircleSvg}
                            color={task.color}
                        />
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