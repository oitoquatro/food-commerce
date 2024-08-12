import { useState, useEffect } from 'react'

import { Cabecalho } from '../../../components/Cabecalho'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getBurgers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burgersRequest = await getBurgers()

      setBurgers(burgersRequest.data)
    })()
  }, [])

  return (
    <>
      <Cabecalho title='Búrguers' />
      <SnackTitle>Hambúrguers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
