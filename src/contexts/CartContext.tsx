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
    //A função abaixo e responsável por corresponder aos itens "item" contidos na const "cart", cada vez que é executada ela corresponde-rá a um item diferente.
    //função de busca
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )
    //função de atualização
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      console.log(`newCart atualização`, newCart)
      setCart(newCart)

      return
    }

    //função de adicionar
    ///função que monta um novo snack
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }

    ///adiciona o snack ao cart existente --- push de um array
    const newCart = [...cart, newSnack]

    console.log(`newCart`, newCart)

    setCart(newCart)
  }

  //retorno do Provider, com o array "cart" e a função "addSnackIntoCart" que vai empilhando no array
  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
