import { GameTableData } from '../GameTableData/GameTableData'

export const GameTableRow: React.FC = () => {
  const fields = [1, 2, 3, 4, 5]

  return (
    <tr className='table__row'>
      {fields.map((_, index) => {
        return <GameTableData key={index} />
      })}
    </tr>
  )
}
