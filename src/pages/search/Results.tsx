import { useRef } from 'react'
import { ResultsTable } from './ResultsTable'

export const Results = () => {
  const tableRef = useRef<HTMLDivElement>(null)

  return <ResultsTable ref={tableRef} />
}
