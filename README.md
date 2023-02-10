# Hook State Management

## Installasi State Management Hooks

    Todo :
        1. src/reducers/index.js
            - initialState
            - appReducers
            - panggil kontakReducer
        2. src/reducers/kontak/index.js
            - function kontak
        3. src/kontets/appState.js
            - createContext
            - AppStateProvider
        4. src/index.js
            - import dan panggil initialState, appReducer from 'reducers'
            - import dan pasang AppStateProvider from './contexts/appState'
            - bungkus <App/> dengan AppStateProvider
