import { Box } from '@mui/material'
import { GameTableRow } from '../GameTableRow/GameTableRow'

export const GameTable: React.FC = () => {
  const fields = [1, 2, 3, 4, 5]

  const getTableRow = () => {
    return fields.map((item, index) => {
      return <GameTableRow key={index} />
    })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <table className='table'>
        <tbody>{getTableRow()}</tbody>
      </table>
    </Box>
  )
}
