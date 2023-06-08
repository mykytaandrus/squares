import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Option } from '../../types'

interface OptionsState {
  currentOption: null | Option
  data: [] | Option[]
  error: null | string
  loaded: boolean
  loading: boolean
}

const initialState: OptionsState = {
  currentOption: null,
  data: [],
  error: null,
  loaded: false,
  loading: false,
}

export const fetchOptions = createAsyncThunk<Option[]>('options/fetchOptions', async function (): Promise<Option[]> {
  const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')

  if (!response.ok) throw new Error('Fetching data error!')

  return await response.json()
})

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setCurrentOption: (state, action) => {
      state.currentOption = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOptions.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchOptions.fulfilled, (state, action) => {
        state.data = action.payload
        state.loaded = true
        state.loading = false
      })
      .addCase(fetchOptions.rejected, (state) => {
        state.loaded = false
      })
  },
})

export const { setCurrentOption } = optionsSlice.actions

export default optionsSlice.reducer
