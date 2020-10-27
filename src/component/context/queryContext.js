import { createContext, useContext, useReducer } from 'react';

const QueryContext = createContext()
const QueryUpdateContext = createContext()

export function useQuery() {
  return useContext(QueryContext)
}

export function useUpdateQuery() {
  return useContext(QueryUpdateContext)
}



export function QueryProvider({ children }) {


  return (
    <QueryContext.Provider value={}>

    </QueryContext.Provider>
  )
}