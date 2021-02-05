import React from 'react'
import PropTypes from 'prop-types'

const Footer= (props) =>(
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p>&copy; M.Ravenmoore</p>
    <ul className="icons">
      <li>
        <a href="https://" className="icon fa-linkedin">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    
  </footer>
)
  
Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
