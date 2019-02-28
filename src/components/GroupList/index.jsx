import React from 'react'
import "./index.css"

const GroupList = ({ filter, list = [], onBuildClick }) => {
    const items = list.filter(({ isLocked, isPrivate }) => {
        switch (filter) {
            case "all": {
                return true
            }
            case "locked": {
                return isLocked
            }
            case "private": {
                return isPrivate
            }
        }
    }).map(({ groupName, groupColor, isLocked, isPrivate, projectCount }) => {
        return (
            <li key={groupName} className={`group-list-item ${isLocked ? "locked" : ""}`}>
                <article className="group-list-main">
                    <div className="group-color-container">
                        <div className="group-color" style={{
                            backgroundColor: groupColor
                        }} />
                    </div>
                    <header className="group-detail">
                        <h5 className="group-detail-name">{groupName}</h5>
                        <div className="group-detail-status">
                            {isLocked && <div className="group-detail-status-tag">锁定</div>}
                            {isPrivate && <div className="group-detail-status-tag">私密</div>}
                            &nbsp;
                        </div>
                        <div className="group-detail-count">
                            <strong className="group-detail-count-num">
                                {projectCount}
                            </strong>项目
                        </div>
                    </header>
                </article>
            </li>
        )
    })
    items.push((
        <li key="" className="group-list-item">
            <article className="align-wrapper" onClick={onBuildClick}>
                <div className="build-group-button">新建项目组</div>
            </article>
        </li>
    ))
    return (
        < ul className = "group-list-ul" >
            {items}
        </ul >
    )
}

export default GroupList