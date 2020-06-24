import React, { useReducer } from 'react';
import { SORT_METHODS, SET_SORT_METHOD } from '../../constants/sort'

const SortStateContext = React.createContext()
const SortDispatchContext = React.createContext()

const sortReducer = (_state, action) => {
  switch (action.type) {
    case SET_SORT_METHOD: {
      return { sortMethod: action.sortMethod }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const SortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortReducer, {sortMethod: Object.keys(SORT_METHODS)[0]})
  return (
    <SortStateContext.Provider value={state}>
      <SortDispatchContext.Provider value={dispatch}>
      {children}
      </SortDispatchContext.Provider>
    </SortStateContext.Provider>
  )
}

const useSortState = () => {
  const context = React.useContext(SortStateContext)
  if (context === undefined) {
    throw new Error('useSortState must be used within a SortProvider')
  }
  return context
}
const useSortDispatch = () => {
  const context = React.useContext(SortDispatchContext)
  if (context === undefined) {
    throw new Error('useSortDispatch must be used within a SortProvider')
  }
  return context
}

export { useSortState, useSortDispatch }
export default SortProvider
