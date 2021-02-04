import React from 'react'
import Nav from '../Nav/nav'

const headerStyles = {
  backgroundColor: 'yellow',
}


export default function Header(){
  return(
    <div id="header" style={headerStyles}>
      <h1>Matt Ravenmoore</h1>
      <p>Personal Portfolio</p>
      <Nav />
    </div>
  )
}