import { Box, Typography } from '@mui/material'
import { HistoryItems } from './HistoryItems/HistoryItems'
import { useState } from 'react'

export const History: React.FC = () => {
  const [hoveredSquares, setHoveredSquares] = useState(null)

  return (
    <Box sx={{ p: 4 }}>
      <Typography component='h3' textAlign='center' variant='h6'>
        Hover squares
      </Typography>
      {hoveredSquares ?? <HistoryItems />}
    </Box>
  )
}
