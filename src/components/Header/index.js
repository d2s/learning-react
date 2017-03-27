import React from 'react'
import HeaderLink from '../HeaderLink'

export default (props) => (
  <header className='tc pv4 pv5-ns'>
    <nav className="pa3 pa4-ns">
      <HeaderLink name="Site Name" />
      <HeaderLink name="Home" />
      <HeaderLink name="About" />
      <HeaderLink name="Store" />
      <HeaderLink name="Contact" />
    </nav>
  </header>
)
