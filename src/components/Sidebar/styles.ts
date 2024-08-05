import styled, { css } from 'styled-components'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.red};

  /**condição para expansão do menu.
  Sinal de dolar para trabalhar javascript dentro do css.
  Uma aron function recebendo como parâmetro o isMenuOpen.
  retornando uma condicional.*/
  ${({ isMenuOpen }) => {
    return isMenuOpen
      ? css`
          width: 16.3rem;
        `
      : css`
          width: 7.75rem;
        `
  }}
  /**fim da condição de expanção do menu. */



  /**width: 7.75rem;*/
  /**width: 16.3rem; */
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.5s;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
          fill: ${({ theme }) => theme.colors.white};
          width: 4 rem;
          height: 4rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        /**O e comercial (&) quer diser que sera aplicadodo para o elemento pai, no caso a (a). */
        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }


  
  /**Ajustando para mobile. */
  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    button {
      display: none;
    }
    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0rem;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`
