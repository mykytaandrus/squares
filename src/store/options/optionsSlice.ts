import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { MyKnownError, Option, OptionsState } from '../../types'

const initialState: OptionsState = {
  currentOption: null,
  data: [],
  error: null,
  loaded: false,
  loading: false,
}

export const fetchOptions = createAsyncThunk<Option[], void, { rejectValue: MyKnownError }>(
  'options/fetchOptions',
  async (_, thunkApi) => {
    const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
    if (!response.ok) return thunkApi.rejectWithValue((await response.json()) as MyKnownError)
    return (await response.json()) as Option[]
  }
)

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
        state.error = 'Error fetching data! Try another time.'
        state.loading = false
      })
  },
})

export const { setCurrentOption } = optionsSlice.actions

export default optionsSlice.reducer