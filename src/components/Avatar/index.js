import React from 'react'
import avatarPicture from '../../images/d2s.jpg'

export default (props) => (
  <header className='tc pv4 pv5-ns'>
    <img src={avatarPicture} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
    <h1 className='f5 f4-ns fw6 mid-gray'>{props.name}</h1>
    <h2 className='f6 gray fw2 ttu tracked'>{props.country}</h2>
  </header>
)