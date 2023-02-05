import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <div>
<>
      <header className='header' id='header'>
        <nav className='nav '>
          <a href="#" class="nav__logo">
            <i class='bx bxs-watch nav__logo-icon'></i> RAVEN
          </a>
          <div className='nav__menu' id='nav__menu'>
            <ul className='nav__item'>

              <li className='nav__item'>
                <NavLink className="link nav__link " to="/">Home</NavLink>
              </li>
              <li className='nav__item'>

                <NavLink className="link nav__link" to="/about">About</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink className="link nav__link" to="/contact">Contact</NavLink>
              </li>
<li className='nav__link'>
<i class='bx bx-landscape change-theme' id="theme-button"></i>
</li>

            </ul>


          </div>





        </nav>
      </header>


      </>

    </div>
  )
}

export default Navbar