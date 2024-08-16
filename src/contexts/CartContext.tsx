import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
  //updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  //função de adicionar
  function addSnackIntoCart(snack: SnackData): void {
    //função que monta um novo snack
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    //adiciona o snack ao cart existente --- push de um array
    const newCart = [...cart, newSnack]

    console.log(`newCart`, newCart)
    
    setCart(newCart)
  }

  //retorno do Provider, com o array "cart" e a função "addSnackIntoCart" que vai empilhando no array
  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
