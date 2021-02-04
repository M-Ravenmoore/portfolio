import React from 'react'

const navStyles= {
  display:"flex",
  

}

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
          <a href={`/projects`} >
           Projects
          </a>
        </li>
      </ul>
    </div>
  )
}