import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import BebidasPage from './pages/Main/Bebidas'
import SobremesasPage from './pages/Main/Sobremesas'
import MyCartPage from './pages/MyCart'
import Payment from './pages/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='bebidas' element={<BebidasPage />} />
        <Route path='sobremesas' element={<SobremesasPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
      <Route path='payment' element={<Payment />} />
    </Routes>
  )
}
