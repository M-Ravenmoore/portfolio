import React from 'react'
import PropTypes from 'prop-types'

const Footer= (props) =>(
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p>&copy; M.Ravenmoore
      <ul>
        <li>Email: m.ravenmoore@gmail.com</li>
        <li>Linkedin: <a href="https://www.linkedin.com/in/matt-ravenmoore/">Matt Ravenmooore</a></li>
      </ul>
    </p>
  </footer>
)
  
Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
