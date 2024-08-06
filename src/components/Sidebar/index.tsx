import { useState } from 'react'
import { NavLink } from 'react-router-dom' //resp. pela navegação do menu.

import { Container } from './styles'

import menuImg from '../../assets/menu.svg'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const manipularMenuAlternancia = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={manipularMenuAlternancia}>
        <img src={menuImg} alt='Abrir e fechar omenu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurgerIcon />
              <span>Hambúrguers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='bebidas'>
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='sobremesas'>
              <IceCreamIcon />
              <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
