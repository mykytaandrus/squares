import { useDeferredValue } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from '../../store/hooks'
import { Alert, Box, Typography } from '@mui/material'

export const History: React.FC = () => {
  const history = useAppSelector((state) => state.history.data)

  const getHistoryItems = () => {
    return (
      <Box sx={{ p: 2, maxHeight: '80vh', overflowY: 'scroll' }}>
        {history.map((item) => (
          <Alert icon={false} key={uuidv4()} severity='warning' sx={{ m: 1, justifyContent: 'center', width: 200 }}>
            row: {item.row} col: {item.col}
          </Alert>
        ))}
      </Box>
    )
  }

  const deferedHistory = useDeferredValue(getHistoryItems())

  return (
    <Box sx={{ p: 4, minWidth: 320 }}>
      <Typography component='h3' textAlign='center' variant='h6' minWidth={265}>
        Hover squares
      </Typography>
      {history.length > 0 && deferedHistory}
    </Box>
  )
}
