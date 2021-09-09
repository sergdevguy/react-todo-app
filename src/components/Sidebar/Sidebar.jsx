import React from "react";
import Lists from "./Lists";
import Button from "./Button";

const Sidebar = ({ tasks, setStorageObj }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__lists">
                <Lists tasks={tasks} />
            </div>
            <div className="sidebar__button">
                <Button setStorageObj={setStorageObj} />
            </div>
        </div>
    )
}

export default Sidebar;