import { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

export const Navigation: React.FC = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const handleClick = () => {
    console.log('work')
  }

  return (
    <Box sx={{ alignItems: 'start', display: 'flex', justifyContent: 'center', width: 400 }}>
      <FormControl size='small' sx={{ width: 200 }}>
        <InputLabel>Pick mode</InputLabel>
        <Select label='Pick mode' onChange={handleChange} value={age}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={handleClick} sx={{ ml: 2, height: 40 }} variant='contained'>
        Start
      </Button>
    </Box>
  )
}
