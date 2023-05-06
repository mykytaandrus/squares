import { useEffect, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useAppSelector } from '../../../store/hooks'

export const Navigation: React.FC = () => {
  const [disabled, setDisabled] = useState(true)
  const [selectValue, setSelectValue] = useState('')

  const options = useAppSelector((state) => state.options.data)

  useEffect(() => {
    options ? setDisabled(false) : null
  }, [options])

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string)
  }

  const handleClick = () => {
    console.log('work')
  }

  return (
    <Box sx={{ alignItems: 'start', display: 'flex', justifyContent: 'center', width: 400 }}>
      <FormControl disabled={disabled} size='small' sx={{ width: 200 }}>
        <InputLabel>Pick mode</InputLabel>
        <Select label='Pick mode' onChange={handleChange} value={selectValue}>
          {options
            ? options.map((item) => (
                <MenuItem key={item.id} value={item.field}>
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
