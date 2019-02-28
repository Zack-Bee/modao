const SET_FILTER = "SET_FILTER"
export default (filter) => ({
    type: SET_FILTER,
    selectedFilter: filter
})

export { SET_FILTER }