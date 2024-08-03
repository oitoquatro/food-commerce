import { Container } from './styles'

import menuImg from '../../assets/menu.svg'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

export function Sidebar() {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='Abrir e fechar omenu' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#' className='active'>
              <BurgerIcon />
              <span>Hambúrguers</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <SodaIcon />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <IceCreamIcon />
              <span>Sobremesas</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
