import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todoSlice'

const TaskInput = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleAddTask = () => {
        dispatch(addTask(task))
        setTask('')
    }

    return (
        <div className='justify-center flex mt-10'>
            <input type="text" placeholder='Enter Todo' className='border-b-2 w-2/5 text-lg outline-0 ' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddTask} className='border-b-2 px-5 text-lg'>Add</button>
        </div>
    )
}

export default TaskInput
