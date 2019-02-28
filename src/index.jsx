import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Select from "./containers/Select.jsx"
import GroupList from "./containers/GroupList.jsx"
import "./index.css"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers/index"

const store = createStore(reducers, {
    selectdFilter: "all",
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
})

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <header>
                        <Select list={[{
                            value: "all",
                            label: "所有项目组"
                        }, {
                            value: "locked",
                            label: "锁定"
                        }, {
                            value: "private",
                            label: "私密"
                        }]}
                        />
                    </header>
                    <article>
                        <GroupList />
                    </article>
                </React.Fragment>
            </Provider>
        )
    }
}
ReactDOM.render((
    <App />
), document.getElementById("root"))