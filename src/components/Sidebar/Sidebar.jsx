import React from "react";
import Lists from "./Lists";
import Button from "./Button";

const Sidebar = ({ tasks, addTask, removeTask }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__lists">
                <Lists tasks={tasks} removeTask={removeTask} />
            </div>
            <div className="sidebar__button">
                <Button addTask={addTask} />
            </div>
        </div>
    )
}

export default Sidebar;