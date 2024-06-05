import { createSlice, nanoid } from '@reduxjs/toolkit'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('tasks')
        return serializedState ? JSON.parse(serializedState) : []
    } catch (error) {
        return []
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('tasks', serializedState)
    } catch (error) {
        console.error(error)
    }
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: loadState(),

    reducers: {
        addTask: (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
            saveState(state)
        },
        deleteTask: (state, action) => {
            const newState = state.filter(task => task.id !== action.payload)
            saveState(newState)
            return newState
        },
        markTask: (state, action) => {
            const task = state.find(task => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
                saveState(state)
            }
        },
        editTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id)
            if (task) {
                task.text = action.payload.text
                saveState(state)
            }
        }
    }
})

export const { addTask, deleteTask, markTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer