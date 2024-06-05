import React from 'react'
import { Provider } from 'react-redux'
import store from './app/store'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <Provider store={store}>
      <h1 className="text-center font-bold text-5xl mt-8">Todo</h1>
      <TaskInput />
      <TaskList />
    </Provider>
  )
}

export default App
