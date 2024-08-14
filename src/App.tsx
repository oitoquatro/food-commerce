import { createContext, useState, useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import { SnackData } from './interfaces/SnackData'
import { getBebidas, getBurgers, getPizzas, getSobremesas } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)

export default function App() {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [bebidas, setBebidas] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgersRequest = await getBurgers()
        const pizzasRequest = await getPizzas()
        const bebidasRequest = await getBebidas()
        const sobremesasRequest = await getSobremesas()

        const requests = [burgersRequest, pizzasRequest, bebidasRequest, sobremesasRequest]

        const [
          { data: burgersResponse },
          { data: pizzasResponse },
          { data: bebidasResponse },
          { data: sobremesasResponse },
        ] = await Promise.all(requests)

        setBurgers(burgersResponse)
        setPizzas(pizzasResponse)
        setBebidas(bebidasResponse)
        setSobremesas(sobremesasResponse)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{ burgers, pizzas, bebidas, sobremesas }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
