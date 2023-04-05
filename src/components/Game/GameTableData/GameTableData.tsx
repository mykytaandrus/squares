import { MouseEvent, useState } from 'react'

export const GameTableData: React.FC = () => {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = (e: MouseEvent) => {
    const cell = e.target as HTMLTableCellElement
    const row = cell.parentNode as HTMLTableRowElement

    console.log('row:' + (row.rowIndex + 1))
    console.log('col:' + (cell.cellIndex + 1))

    setHovered(!hovered)
  }

  return <td className={hovered ? 'table__data table__data--hovered' : 'table__data'} onMouseEnter={handleMouseEnter} />
}
