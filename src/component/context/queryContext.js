import { createContext, useContext, useReducer } from 'react';
import ACTIONS from './ACTIONS'

const QueryContext = createContext()
const QueryUpdateContext = createContext()

export function useQuery() {
  return useContext(QueryContext)
}

export function useUpdateQuery() {
  return useContext(QueryUpdateContext)
}

// function someReducer(state, action) {
//   return {alteredState}
// }

function newResource(name, purity, quantity) {
  return {
    'name': name,
    'purity': purity,
    'quantity': quantity,
    'id': Date.now()
  }
}

function updateResources(resources, action) {
  const payload = action.payload
  switch (action.type) {
    case ACTIONS.ADD_RESOURCE:
      return [...resources, newResource(payload.name, payload.purity, payload.quantity)]
    case ACTIONS.TOGGLE_PURITY:
      return resources.map(resource => {
        if (resource.id === payload.id) {
          return {...resource, purity: (resource.purity === 3 ? 1 : resource.purity + 1)}
        }
      })
    case ACTIONS.INCREMENT_QUANTITY:
      return resources.map(resource => {
        if (resource.id === payload.id) {
          return {...resource, quantity: resource.quantity + 1}
        }
      })
    case ACTIONS.DECREMENT_QUANTITY:
      return resources.map(resource => {
        if (resource.id === payload.id) {
          return {...resource, quantity: resource.quantity - 1}
        }
      })
    case ACTIONS.REMOVE_RESOURCE:
      return resources.filter(resource => resource.id !== payload.id)
    default:
      console.log('foreign request in updateResources reducer')
      return resources
  }
}

export function QueryProvider({ children }) {

  // const [state, dispatch] = useReducer(someReducer, someInitialState)
  const [resourcesState, dispatchResources] = useReducer(updateResources, [])

  return (
    <QueryContext.Provider value={ {'resourcesState': resourcesState, 'dispatchResources': dispatchResources } }>
      { children }
    </QueryContext.Provider>
  )
}