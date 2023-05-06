import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import type { Option } from '../../types'

interface OptionsState {
  data: [] | Option[]
  error: null | string
  loaded: boolean
  loading: boolean
}

const initialState: OptionsState = {
  data: [],
  error: null,
  loaded: false,
  loading: false,
}

export const fetchOptions = createAsyncThunk<Option[]>(
  'options/fetchOptions',
  async function (_, { rejectWithValue }): Promise<Option[]> {
    try {
      const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
      if (!response.ok) {
        throw new Error('Server error!')
      }
      return await response.json()
    } catch {
      return rejectWithValue(Error.message)
    }
  }
)

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {},
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
      .addCase(fetchOptions.rejected, (state, action) => {
        state.loaded = false
      })
  },
})

export default optionsSlice.reducer
