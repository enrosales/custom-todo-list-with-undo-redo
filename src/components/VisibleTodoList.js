import React, { useContext } from 'react'
import TaskList from './TaskList'
import { GlobalContext } from '../context/GlobalState'

function VisibleTodoList() {
  const { todos } = useContext(GlobalContext)
    return (
        <TaskList tasks={todos} />
    )
}

export default VisibleTodoList;