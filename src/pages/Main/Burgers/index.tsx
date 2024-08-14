import { useContext } from 'react'
import { SnackContext } from '../../../App'
import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burgers() {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Cabecalho title='Burguers' />
      <SnackTitle>Hambúrguers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
