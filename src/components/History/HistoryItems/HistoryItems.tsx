import { Alert, Box } from '@mui/material'

export const HistoryItems: React.FC = () => {
  const test = [1, 2, 3, 4, 5, 6]
  return (
    <Box sx={{ p: 2 }}>
      {test.map((item, index) => (
        <Alert icon={false} key={index} severity='warning' sx={{ m: 1 }}>
          row: {item} col: {item}
        </Alert>
      ))}
    </Box>
  )
}
