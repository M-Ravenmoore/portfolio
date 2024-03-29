import PropTypes from 'prop-types'
import React from 'react'
import LogoImg from '../images/logo.png'

const headerStyles = {
  backgroundColor: '#043565',
}


const ProjectsHeader = props =>(
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
    <a href="/"><img  className='logoImg' src={LogoImg} alt="logo"/></a>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Matt Ravenmoore's Projects</h1>
        <p>
         These are a few of the projects I have worked on recently.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('RavenMaze')
            }}
          >
            RavenMaze
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('TDK')
            }}
          >
            The Dragons Kitchen
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Ravenmoore')
            }}
          >
            Ravenmoore Valley
          </button>
        </li>
      </ul>
    </nav>
  </header>
)
ProjectsHeader.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default ProjectsHeader
