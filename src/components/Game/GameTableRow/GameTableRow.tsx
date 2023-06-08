import { v4 as uuidv4 } from 'uuid'
import { GameTableData } from '../GameTableData/GameTableData'

interface GameTableRowProps {
  fields: number[]
}

export const GameTableRow: React.FC<GameTableRowProps> = ({ fields }) => {
  return <tr className='table__row'>{fields && fields.map(() => <GameTableData key={uuidv4()} />)}</tr>
}
