const initState = []

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleTodoStatus':
            return state.map((todo) => {
                if (todo.id === action.payload)
                    return { ...todo, completed: !todo.completed }
                return todo
            })
        default:
            return state
    }
}

export default todoListReducer
