import { useAppSelector } from '../../store/hooks'
import { Box, Typography } from '@mui/material'
import { GameTable } from './GameTable/GameTable'
import { Navigation } from './Navigation/Navigation'

export const Game: React.FC = () => {
  const error = useAppSelector((state) => state.options.error)

  return (
    <Box sx={{ p: 4 }}>
      <Navigation />
      <GameTable />

      {error && (
        <Typography component='p' sx={{ p: 4, textAlign: 'center' }}>
          {error}
        </Typography>
      )}
    </Box>
  )
}
