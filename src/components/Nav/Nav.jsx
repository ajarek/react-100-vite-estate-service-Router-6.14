import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='nav'>
      <div className='logo'>
        <Link
          className='link link-logo'
          to={'/'}
        >
          <div className='img'>
            <img
              src='/logo.png'
              alt='logo'
            />
          </div>
          <h1>Buro Nieruchomości</h1>
        </Link>
      </div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link link-text'
          to={'/o-nas'}
        >
          O_Nas
        </Link>
        <Link
          className='link link-text'
          to={'/popularne'}
        >
          Oferty
        </Link>
        <Link
          className='link link-text'
          to={'/uslugi'}
        >
          Nasze Usługi
        </Link>
        <Link
          className='link link-text'
          to={'/klienci'}
        >
          Nasi Klienci
        </Link>
        <Link
          className='link link-text'
          to={'/kontakt'}
        >
          Kontakt
        </Link>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
