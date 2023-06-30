const initState = {
    search: '',
    status: 'All',
    priorities: [],
}

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/changeSearchFilter':
            return {
                ...state,
                search: action.payload,
            }
        case 'filters/changeStatusFilter':
            return {
                ...state,
                status: action.payload,
            }
        case 'filters/changePrioritiesFilter':
            return {
                ...state,
                priorities: action.payload,
            }
        default:
            return state
    }
}

export default filtersReducer
