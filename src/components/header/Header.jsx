import { forwardRef } from 'react'
import './Header.css'
import logo from '../../assets/images/AF-Logo.svg'

const Header = forwardRef(function Header({ mode = 'transparent' }, ref) {
  return (
    <header ref={ref} className={`header header--${mode}`}>
      <a className="header__brand" href="/">
        <img className="header__logo" src={logo} alt="A and F logo" />
      </a>
      <nav className="header__nav" aria-label="Primary">
        <button className="header__link" type="button">
          Om bröllopet
        </button>
        <button className="header__link" type="button">
          Svara
        </button>
      </nav>
    </header>
  )
})

export default Header
