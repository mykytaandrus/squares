import { createSlice } from '@reduxjs/toolkit'
import type { HistoryState } from '../../types'

const initialState: HistoryState = {
  data: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.data.push(action.payload)
    },
    removeHistory: (state, action) => {
      const index = state.data.findIndex((item) => item.col === action.payload.col && item.row === action.payload.row)
      state.data.splice(index, 1)
    },
    resetHistory: (state) => {
      state.data = []
    },
  },
})

export const { addHistory, removeHistory, resetHistory } = historySlice.actions

export default historySlice.reducer
