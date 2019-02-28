import { connect } from "react-redux"
import Select from "../components/Select/index.jsx"
import setFilter from "../actions/setFilter"

const mapDispatchToProps = (dispatch) => ({
    onChange(event) {
        dispatch(setFilter(event.target.value))
    }
})

export default connect(null, mapDispatchToProps)(Select)