import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return(
      <main
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src='' alt="" />
          </span>
          <p>put overview content here and maybe add some images about me <a href="#work">My work</a></p>

          <p> and some more <a href="#about">about me</a></p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>a bit about what i can do and the frameworks softwares and technologies that i cand use</p>

          <a href='/projects'><button>Projects</button></a>
          {close}
        </article>
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image portrait">
            <img src='' alt="" />
          </span>
          <p>my full bio and a better photo of me!</p>
          {close}
        </article>

        <article
            id="contact"
            className={`${this.props.article === 'contact' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="cardHeader">Contact</h2>
            <form method="post" action="#">
              <div className="field name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field email">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" className="special" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
            <ul className="icons">
              <li>
                <a href="https://" className="icon fa-linkedin-in">
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
            {close}
          </article>

      </main>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main