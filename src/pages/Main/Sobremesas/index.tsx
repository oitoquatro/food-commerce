import { useEffect, useState } from 'react'

import { Cabecalho } from '../../../components/Cabecalho'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

import { getSobremesas } from '../../../services/api'

export default function Sobremesas() {
  const [sobremesas, setSobremesas] = useState([])

  useEffect(() => {
    ;(async () => {
      const sobremesasRequest = await getSobremesas()

      setSobremesas(sobremesasRequest.data)
    })()
  }, [])

  return (
    <>
      <Cabecalho title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={sobremesas}></Snacks>
    </>
  )
}
