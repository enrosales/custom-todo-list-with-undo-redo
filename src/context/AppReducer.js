import { TodosActions, VisibilityFilters } from "../actions";
export default (state, action) => {
  const { history, stepNumber } = state;
  switch (action.type) {
    case TodosActions.ADD_TODO:
      const todo = {
        title: action.payload,
        id: history[stepNumber].todos.length + 1,
        done: false,
      };
      return {
        stepNumber: stepNumber + 1,
        history: history.concat([
          {
            ...history[stepNumber],
            todosFiltered: history[stepNumber].todosFiltered.concat(todo),
            todos: history[stepNumber].todos.concat(todo),
          },
        ]),
      };
    case TodosActions.REMOVE_TODO:
      return {
        ...state,
        stepNumber: stepNumber + 1,
        history: history.concat([
            {
                ...history[stepNumber],
                todosFiltered: history[stepNumber].todosFiltered.filter(
                    (todo) => todo.id !== action.payload
                  ),
                todos: history[stepNumber].todos.filter((todo) => todo.id !== action.payload),
            }
        ]),
      };
    case TodosActions.COMPLETE_TODO:
      return {
        ...state,
        stepNumber: stepNumber + 1,
        history: history.concat([
            {
                ...history[stepNumber],
                todosFiltered: history[stepNumber].todosFiltered.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
              ),
              todos: history[stepNumber].todos.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
              ),
            }
        ]),
      };
    case VisibilityFilters.SHOW_ALL:
      return {
        ...state,
        history: history.concat([
            {
                ...history[stepNumber],
                todosFiltered: history[stepNumber].todos,
                filter: VisibilityFilters.SHOW_ALL,
            }
        ]),
        stepNumber: history.length,
      };
    case VisibilityFilters.SHOW_COMPLETED:
      return {
        ...state,
        history: history.concat([
            {
                ...history[stepNumber],
                todosFiltered: history[stepNumber].todos.filter((todo) => todo.done === true),
                filter: VisibilityFilters.SHOW_COMPLETED,
            }
        ]),
        stepNumber: stepNumber + 1,
      };
    case VisibilityFilters.SHOW_INCOMPLETE:
      return {
        ...state,
        history: history.concat([
            {
                ...history[stepNumber],
                todosFiltered: history[stepNumber].todos.filter((todo) => todo.done === false),
                filter: VisibilityFilters.SHOW_INCOMPLETE
            }
        ]),
        stepNumber: stepNumber + 1,
      };
    case TodosActions.UNDO_STATE:
        return {
            ...state,
            stepNumber: stepNumber - 1
        }
        case TodosActions.REDO_STATE:
            return {
                ...state,
                stepNumber: stepNumber + 1
            }
    default:
      return state;
  }
};
