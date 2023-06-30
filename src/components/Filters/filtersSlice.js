import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        changeSearchFilter(state, action) {
            state.search = action.payload
        },
        changeStatusFilter(state, action) {
            state.status = action.payload
        },
        changePrioritiesFilter(state, action) {
            state.priorities = action.payload
        },
    },
})

export default filtersSlice
