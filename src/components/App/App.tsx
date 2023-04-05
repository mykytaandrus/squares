import { useState } from 'react'
import { Container, Grid } from '@mui/material'
import { Game } from '../Game/Game'
import { History } from '../History/History'

export const App: React.FC = () => {
  const [hoveredSquares, setHoveredSquares] = useState([])

  return (
    <Container component='main' maxWidth='lg'>
      <Grid container justifyContent='center'>
        <Game />
        <History />
      </Grid>
    </Container>
  )
}
