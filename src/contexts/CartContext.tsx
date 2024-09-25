import { createContext, useState, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { useNavigate } from 'react-router-dom'

//npm i react-toastify -----> instalação no terminal
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
import { CustomerData } from '../interfaces/CustomerData'
import { Snack } from '../interfaces/Snack'
import { processCheckout } from '../services/api'

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@FoodCommerce:cart'

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey) //essa aronfunc recupera os dados do localStorage
    if (value) return JSON.parse(value)

    return []
  })

  function saveCart(items: Snack[]) {
    setCart(items)

    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }

  function clearCart() {
    localStorage.removeItem(localStorageKey)
  }

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
      saveCart(newCart)

      return
    }

    //função de adicionar
    ///função que monta um novo snack
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }

    ///adiciona o snack ao cart existente --- push de um array
    const newCart = [...cart, newSnack]
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado no pedido!`)

    console.log(`newCart`, newCart)

    saveCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    saveCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    //condição que não deixa decrementar quando tem apenas 01 item
    if (newQuantity <= 0) return

    const snackExistentInCart = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack,
    )

    if (!snackExistentInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }
      return item
    })
    saveCart(newCart)
  }

  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  async function payOrder(customer: CustomerData) {

    try {
      const response = await processCheckout(cart, customer)
      if (response.data.status !== 'PAID') {
toast.error('Erro ao processar o pagamento, por favor, tente novamente mais tarde.')
return
      }
      toast.success('Pagamento realizado com sucesso.')
      clearCart() //deve ser executado após retorno positivo da API.
    } catch (error) {
      console.log(error)
      toast.error('Erro ao processar o pedido.')
    }



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
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
