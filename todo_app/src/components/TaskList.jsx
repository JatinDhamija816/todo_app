import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, editTask, markTask } from '../features/todoSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }

    const handleMarkTask = (id) => {
        dispatch(markTask(id))
    }

    const handleEditTask = (id, text) => {
        const newTask = prompt('Edit Task ', text)
        if (newTask) {
            dispatch(editTask({ id, text: newTask }))
        }
    }

    return (
        <div className=''>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id} className='flex justify-between bg-slate-300 w-1/3 mx-auto mt-5 rounded-lg p-2'>
                            <p className={`ml-3 ${task.completed ? `line-through` : ``}`} onClick={() => handleMarkTask(task.id)}>{task.text}</p>
                            <div>
                                <button className='mr-3' onClick={() => handleEditTask(task.id, task.text)}><EditIcon color='primary' /></button>
                                <button className='mr-3' onClick={() => handleDeleteTask(task.id)}><DeleteIcon color='error' /></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList