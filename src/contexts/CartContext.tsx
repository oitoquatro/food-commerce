import { createContext, useState, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'

//npm i react-toastify -----> instalação no terminal
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'

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
  [x: string]: any
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
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
      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado no pedido!`)
      setCart(newCart)

      return
    }

    //função de adicionar
    ///função que monta um novo snack
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }

    ///adiciona o snack ao cart existente --- push de um array
    const newCart = [...cart, newSnack]
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no pedido!`)

    console.log(`newCart`, newCart)

    setCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    setCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    return
  }

  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    return
  }

  //retorno do Provider, com o array "cart" e a função "addSnackIntoCart" que vai empilhando no array
  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
