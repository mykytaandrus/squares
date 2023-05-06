import { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import { useAppDispatch } from '../../store/hooks'
import { fetchOptions } from '../../store/options/optionsSlice'
import { Game } from '../Game/Game'
import { History } from '../History/History'

export const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchOptions())
  }, [])

  return (
    <Container component='main' maxWidth='lg'>
      <Grid container justifyContent='center'>
        <Game />
        <History />
      </Grid>
    </Container>
  )
}
