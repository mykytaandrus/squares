import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './options/historySlice'
import optionsReducer from './options/optionsSlice'

export const store = configureStore({
  reducer: {
    history: historyReducer,
    options: optionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
