import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import { VisibilityFilters, TodosActions } from "../actions";

const todos = [
    {
      title: "first task",
      id: 1,
      done: false,
    },
    {
      title: "second task",
      id: 2,
      done: true,
    },
    {
      title: "third task",
      id: 3,
      done: true,
    },
]
const initialState = {
  history: [
      {
        todos: todos,
        todosFiltered: todos,
        filter: VisibilityFilters.SHOW_ALL
      }
  ],
  stepNumber: 0,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTodo = (text) => {
    dispatch({
      type: TodosActions.ADD_TODO,
      payload: text,
    });
  };
const deleteTodo = (index) => {
    dispatch({
        type: TodosActions.REMOVE_TODO,
        payload: index
    })
}

const setCompleted = (id) => {
    dispatch({
        type: TodosActions.COMPLETE_TODO,
        payload: id
    })
}

const setFilter = (filter) => {
    dispatch({
        type: filter,
        payload: null
    })
}

const undoState = () => {
    dispatch({
        type: TodosActions.UNDO_STATE,
        payload: null
    })
}

const redoState = () => {
    dispatch({
        type: TodosActions.REDO_STATE,
        payload: null
    })
}

  return (
    <GlobalContext.Provider
      value={{
        todos: state.history[state.stepNumber].todosFiltered,
        filter: state.history[state.stepNumber].filter,
        stepNumber: state.stepNumber,
        redoLength: state.history.length,
        addTodo,
        deleteTodo,
        setCompleted,
        setFilter,
        undoState,
        redoState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
