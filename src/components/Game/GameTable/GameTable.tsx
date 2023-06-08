import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from '../../../store/hooks'
import { getTableFields } from '../../../utils/getTableFields'
import { GameTableRow } from '../GameTableRow/GameTableRow'
import { Box } from '@mui/material'

export const GameTable: React.FC = () => {
  const field = useAppSelector((state) => state.options.currentOption?.field)

  const getTableRow = () => {
    const fields = getTableFields(field)
    return fields && fields.map(() => <GameTableRow fields={fields} key={uuidv4()} />)
  }

  return (
    <>
      {field && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <table className='table'>
            <tbody>{getTableRow()}</tbody>
          </table>
        </Box>
      )}
    </>
  )
}
