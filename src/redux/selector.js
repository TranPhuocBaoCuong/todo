import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todoList.todos

export const searchFilterSelector = (state) => state.filters.search

export const statusFilterSelector = (state) => state.filters.status

export const prioritiesFilterSelector = (state) => state.filters.priorities

export const todoListRemainingSelector = createSelector(
    todoListSelector,
    searchFilterSelector,
    statusFilterSelector,
    prioritiesFilterSelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All')
                return (
                    todo.name.includes(searchText) &&
                    (priorities.length > 0
                        ? priorities.includes(todo.priority)
                        : true)
                )

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length > 0
                    ? priorities.includes(todo.priority)
                    : true)
            )
        })
    }
)
