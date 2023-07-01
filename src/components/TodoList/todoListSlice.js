import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: { status: 'idle', todos: [] },
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        toggleTodoStatus(state, action) {
            const currentTodo = state.find((todo) => todo.id === action.payload)

            currentTodo.completed = !currentTodo.completed
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.status = 'idle'
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(updateTodoStatus.fulfilled, (state, action) => {
                let currentTodo = state.todos.find(
                    (todo) => todo.id === action.payload.id
                )
                currentTodo.completed = action.payload.completed
            })
    },
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos')
    const data = await res.json()

    return data.todos
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (todo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
    })

    const data = await res.json()

    return data.todos
})

export const updateTodoStatus = createAsyncThunk(
    'todos/updateTodoStatus',
    async (id) => {
        const res = await fetch('/api/updateTodo', {
            method: 'POST',
            body: JSON.stringify(id),
        })

        const data = await res.json()

        return data.todos
    }
)

export default todoListSlice
