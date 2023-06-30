export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const changeSearchFilter = (text) => {
    return {
        type: 'filters/changeSearchFilter',
        payload: text,
    }
}

export const changeStatusFilter = (status) => {
    return {
        type: 'filters/changeStatusFilter',
        payload: status,
    }
}

export const changePrioritiesFilter = (priorities) => {
    return {
        type: 'filters/changePrioritiesFilter',
        payload: priorities,
    }
}

export const toggleTodoStatus = (id) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: id,
    }
}
