import { Box } from '@mui/material'
import { GameTable } from './GameTable/GameTable'
import { Navigation } from './Navigation/Navigation'

export const Game: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Navigation />
      <GameTable />
    </Box>
  )
}
