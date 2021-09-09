import React from 'react';
import './TextWithIcon.scss';

const TextWithIcon = ({ text, icon, color }) => {
    return (
        <div className="text-with-icon">
            {
                color 
                ? 
                <span className="text-with-icon__icon _circle" style={{background: color}}>{icon}</span> 
                : 
                <span className="text-with-icon__icon">{icon}</span>
            }
            <span>{text}</span>
        </div>
    )
}

export default TextWithIcon;