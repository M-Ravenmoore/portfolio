import PropTypes from 'prop-types'
import React from 'react'
import Headshot from '../images/Headshot.jpg'

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
          <h2 className="major">My Background</h2>
          <span className="image main">
          </span>
          <p>Welcome to Matt Ravenmoore's technical resume, if you are looking for Matt as a coder, developer or engineer, you have gotten to the right portfolio. If you are looking to see his other portfolio for metal fabrication and art, click the button below to be taken to Ravenmoore Valley, his family crafting business. </p>

          <a href='https://ravenmoorevalley.ucraft.site/'><button>Ravenmoore Valley</button></a>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Work</h2>
          <p>For the last 2 years I have been working on building technical projects and applications. I have chosen a few to showcase the skills I have achieved and to get my work out into the world. These projects range from simple express servers to full stack applications. There is even a mobile app aimed for Android in there. Click the button below to see what I have cooked up.</p>

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
          <h2 className="major">About Me</h2>
          <span className="Headshot">
            <img  className='image main' src={Headshot} alt="Matt Ravenmoore Headshot"/>
          </span>
          <p>I am Matt Ravenmoore and I am a software engineer. My backgound is in creating magic of varying kinds. From the theater and circus magics of building and creating sets and performances coming together. To metal fabrication and blacksmithing, I have lead a life full of adventures and learning and strive to keep it that way. I push my self to try or learn 3-5 new things every day, this goal helps me push myself to be the best human I can.</p>
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