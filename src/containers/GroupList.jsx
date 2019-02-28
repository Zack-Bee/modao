import { connect } from "react-redux"
import GroupList from "../components/GroupList/index.jsx"

const mapStateToProps = (state) => ({
    list: state.groupList,
    filter: state.selectedFilter
})

const mapDispatchToProps = (dispatch) => ({
    onBuildClick() {
        alert("click")
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)