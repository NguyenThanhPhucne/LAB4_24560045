export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload?.trim()) {
        return state
      }
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.trim(),
          completed: false
        }
      ]
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload)
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}
