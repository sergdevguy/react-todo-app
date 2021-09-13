import React from "react";
import Lists from "./Lists";
import Button from "./Button";
import './Sidebar.scss'

const Sidebar = ({ tasks, addTask, removeTask, setActiveList }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__lists">
                <Lists 
                    tasks={tasks} 
                    removeTask={removeTask} 
                    setActiveList={setActiveList} 
                />
            </div>
            <div className="sidebar__button">
                <Button addTask={addTask} />
            </div>
        </div>
    )
}

export default Sidebar;