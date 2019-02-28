import { SET_FILTER } from "../actions/setFilter"

export default (filter = "all", action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.selectedFilter
        }
        default: {
            return filter
        }
    }
}