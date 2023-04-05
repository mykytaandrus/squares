import { Box, Typography } from '@mui/material'
import { HistoryItems } from '../HistoryItems/HistoryItems'

export const History: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography component='h3' textAlign='center' variant='h6'>
        Hover squares
      </Typography>
      <HistoryItems />
    </Box>
  )
}
