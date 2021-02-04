import React from 'react'

export default function Nav(){
  return(
    <div id="nav">
      <ul >
        <li>
          <a href={`/`} >
            Home
          </a>
        </li>
        <li>
          <a href={`/portfolio`} >
           Portfolio
          </a>
        </li>
      </ul>
    </div>
  )
}