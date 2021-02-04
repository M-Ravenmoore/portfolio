import PropTypes from 'prop-types'
import React from 'react'

const headerStyles = {
  backgroundColor: '#043565',
}


const Header = props =>(
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img src="" alt="logo" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ravenmoore Portfolio</h1>
        <p>
         My personal portfolio, design inspired by {' '} <a href="http://gatsby-dimension.surge.sh/">Dimension starter</a> from Gatsbys starter collection
        </p>
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
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
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
