import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getPizzas, getBebidas, getSobremesas } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  bebidas: SnackData[]
  sobremesas: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {
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
    <SnackContext.Provider value={{ burgers, pizzas, bebidas, sobremesas }}>
      {children}
    </SnackContext.Provider>
  )
}
