import kontakReducer from "./kontak"
const initialState = {}

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      }
    }, state)
  }
}
// panggil Kontak Reducer
const appReducers = combineReducers({
  kontakReducer,
})

export { initialState, combineReducers, appReducers }
