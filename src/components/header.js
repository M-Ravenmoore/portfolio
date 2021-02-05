import PropTypes from 'prop-types'
import React from 'react'
import LogoImg from '../images/logo.png'

const headerStyles = {
  backgroundColor: '#043565',
}


const Header = props =>(
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img  className='logoImg' src={LogoImg} alt="logo"/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ravenmoore Portfolio</h1>
        <h4>
        “It's kind of fun to do the impossible.” -Walt Disney.
        </h4>

        <p>My personal portfolio, a design inspired by <a href="http://gatsby-dimension.surge.sh/">Dimension starter</a> from Gatsbys starter collection</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            My Background
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
           My Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
        </li>
      </ul>
    </nav>
  </header>
)
Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
