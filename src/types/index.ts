type HistoryItem = {
  col: string
  row: string
}

export type Option = {
  id: string
  field: number
  name: string
}

export type Options = {
  options: Option[]
}

export interface HistoryState {
  data: HistoryItem[]
}

export type MyKnownError = {
  errorMessage: string
}

export interface OptionsState {
  currentOption: null | Option
  data: [] | Option[]
  error: null | string
  loaded: boolean
  loading: boolean
}
