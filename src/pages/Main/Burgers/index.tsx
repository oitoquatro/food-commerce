import { useState, useEffect } from 'react'
import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { getBurgers } from '../../../services/api'

import { SnackData } from '../../../interfaces/SnackData'

export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const burgersRequest = await getBurgers()

      setBurgers(burgersRequest.data)
    })()
  }, [])

  return (
    <>
      <Cabecalho title='Burguers' />
      <SnackTitle>Hambúrguers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
