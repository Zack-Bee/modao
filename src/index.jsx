import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Select from "./components/Select/index.jsx"
import GroupList from "./components/GroupList/index.jsx"
import "./index.css"

class App extends Component {
    render() {
        const { filterList, selectdFilter, groupList } = this.state
        return (
            <React.Fragment>
                <header>
                    <Select list={filterList} value={selectdFilter}
                        onChange={this.changeFilter}
                    />
                </header>
                <article>
                    <GroupList list={groupList} 
                        filter={selectdFilter} onBuildClick={this.buildNewGroup} 
                    />
                </article>
            </React.Fragment>
        )
    }
    constructor(props) {
        super(props)
        this.state = {
            selectdFilter: "all",
            filterList: [{
                value: "all",
                label: "所有项目组"
            }, {
                value: "locked",
                label: "锁定"
            }, {
                value: "private",
                label: "私密"
            }],
            groupList: [{
                groupName: "墨刀实验室",
                groupColor: "#66bb6a",
                projectCount: 3,
                isLocked: false,
                isPrivate: false
            }, {
                groupName: "墨刀魔法棒团队",
                groupColor: "#ffc107",
                projectCount: 0,
                isLocked: false,
                isPrivate: false
            }, {
                groupName: "超级工作组",
                groupColor: "#ff6333",
                projectCount: 4,
                isLocked: false,
                isPrivate: true
            }, {
                groupName: "冷笑客服组",
                groupColor: "#f44336",
                projectCount: 4,
                isLocked: false,
                isPrivate: false
            }, {
                groupName: "设计部门",
                groupColor: "#ffc107",
                projectCount: 4,
                isLocked: false,
                isPrivate: false
            }, {
                groupName: "Third Reactor",
                groupColor: "#00b0ff",
                projectCount: 1,
                isLocked: true,
                isPrivate: true
            }]
        }
        this.changeFilter = this.changeFilter.bind(this)
    }

    changeFilter(event) {
        this.setState({
            selectdFilter: event.target.value
        })
    }

    buildNewGroup() {
        alert("click")
    }
}
ReactDOM.render((
    <App />
), document.getElementById("root"))