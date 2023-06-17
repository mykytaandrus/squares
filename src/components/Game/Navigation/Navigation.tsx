import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setCurrentOption } from '../../../store/options/optionsSlice'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { resetHistory } from '../../../store/options/historySlice'

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch()

  const [disabled, setDisabled] = useState(true)
  const [selectValue, setSelectValue] = useState('')
  const options = useAppSelector((state) => state.options.data)
  const currentOptionName = useAppSelector((state) => state.options.currentOption?.name)

  useEffect(() => {
    if (!options.length) return
    setDisabled(false)
  }, [options])

  const handleChange = (event: SelectChangeEvent) => setSelectValue(event.target.value as string)

  const handleClick = () => {
    if (!currentOptionName || currentOptionName !== selectValue) {
      const option = options.find((option) => option.name == selectValue)
      option && dispatch(setCurrentOption(option))
      dispatch(resetHistory())
    }
  }

  return (
    <Box sx={{ alignItems: 'start', display: 'flex', justifyContent: 'center' }}>
      <FormControl disabled={disabled} size='small' sx={{ width: 200 }}>
        <InputLabel>Pick mode</InputLabel>
        <Select label='Pick mode' onChange={handleChange} value={selectValue}>
          {options
            ? options.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>

      <Button disabled={disabled} onClick={handleClick} sx={{ ml: 2, height: 40 }} variant='contained'>
        Start
      </Button>
    </Box>
  )
}
