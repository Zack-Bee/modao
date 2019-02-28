import selectedFilter from "./selectedFilter"
import groupList from "./groupList"
export default (state = {}, action) => ({
    selectedFilter: selectedFilter(state.selectedFilter, action),
    groupList: groupList(state.groupList, action)
})