import React, { useState, useEffect } from 'react'
import OkSvg from "../UI/Icons/taskStatus/OkSvg";
import CancelSvg from "../UI/Icons/taskStatus/CancelSvg";
import TrashSvg from "../UI/Icons/taskStatus/TrashSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";

const StatusList = ({ opened, resetOpened, addStatus, openedStatusTask }) => {
    const [openedStatus, setOpenedStatus] = useState(true);

    const resetButton = (e) => {
        resetOpened();
        setOpenedStatus(false);
        e.stopPropagation();
    }

    useEffect(() => {
        setOpenedStatus(opened);
    }, [opened]);

    return (
        openedStatus &&
        <div className="tasks__item-status">
            <div
                onClick={(e) => {
                    addStatus({
                        'title': openedStatusTask,
                        'status': 'ok',
                    });
                    resetButton(e);
                }}
                className="tasks__item-status-svg _ok"
            >
                {OkSvg}
            </div>
            <div
                onClick={(e) => {
                    addStatus({
                        'title': openedStatusTask,
                        'status': 'cancel',
                    });
                    resetButton(e);
                }}
                className="tasks__item-status-svg _cancel"
            >
                {CancelSvg}
            </div>
            <div
                onClick={(e) => {
                    addStatus({
                        'title': openedStatusTask,
                        'status': 'trash',
                    });
                    resetButton(e);
                }}
                className="tasks__item-status-svg _trash"
            >
                {TrashSvg}
            </div>
            <div
                onClick={(e) => {
                    resetOpened();
                    setOpenedStatus(false);
                    e.stopPropagation()
                }}
                className="tasks__item-status-svg"
            >
                {RemoveSvg}
            </div>
        </div >
    );
}

export default StatusList;