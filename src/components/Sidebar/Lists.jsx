import React from 'react';
import TextWithIcon from "../UI/Text/TextWithIcon";
import CircleSvg from "../UI/Icons/CircleSvg";

const Lists = ({ tasks }) => {
    return (
        <>
        {   Array.isArray(tasks) &&
            tasks.map(task => (
                <div key={task.title} className="lists-list">
                    <TextWithIcon
                        text={task.title}
                        icon={CircleSvg}
                        color={task.color}
                    />
                </div>
            ))
        }
        </>
    );
}

export default Lists;