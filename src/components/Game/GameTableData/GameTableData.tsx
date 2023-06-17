import { MouseEvent, useState } from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { addHistory, removeHistory } from '../../../store/options/historySlice'

export const GameTableData: React.FC = () => {
  const [hovered, setHovered] = useState(false)
  const dispatch = useAppDispatch()

  const handleMouseEnter = (e: MouseEvent) => {
    const cell = e.target as HTMLTableCellElement
    const row = cell.parentNode as HTMLTableRowElement
    const currentCell = { row: (row.rowIndex + 1).toString(), col: (cell.cellIndex + 1).toString() }

    setHovered(!hovered)

    !hovered ? dispatch(addHistory(currentCell)) : dispatch(removeHistory(currentCell))
  }

  return <td className={hovered ? 'table__data table__data--hovered' : 'table__data'} onMouseEnter={handleMouseEnter} />
}
