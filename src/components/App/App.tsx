import { Container, Grid } from '@mui/material'
import { Game } from '../Game/Game'
import { History } from '../History/History'

export const App: React.FC = () => {
  return (
    <Container component='main' maxWidth='lg'>
      <Grid container justifyContent='center'>
        <Game />
        <History />
      </Grid>
    </Container>
  )
}
