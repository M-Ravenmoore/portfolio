import PropTypes from 'prop-types'
import React from 'react'

class ProjectsMain extends React.Component {
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
          id="RavenMaze"
          className={`${this.props.article === 'RavenMaze' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Raven Maze</h2>
          <span className="image main">
            <img src='' alt="" />
          </span>
          <p>Currently Raven Maze is a simple accelerataromiter maze game for android. Built in React Native, its features include tapping into the phones tilt sensor to control a ball to guide it through a randomly generated maze.
            
            Future feature will be:
            difficulty settings, more maps, a story mode, and more....
          </p>
  
          <a href="https://expo.io/@ravenmoore/projects/ravenMaze"><button> Check it our Here </button></a>
          {close}
        </article>

        <article
          id="Ravenmoore"
          className={`${this.props.article === 'Ravenmoore' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Ravenmoore Valley</h2>
          <p>This is my biggest personal project a full community web app and eventualy store for my families crafting bussiness. It is a Full MERN stack app with a standalone express api. 
          </p>

          <a href="https://ravenmoore-valley.netlify.app"><button>Live Site</button></a>
          <a href="https://github.com/M-Ravenmoore/ravenmoore-valley"><button>Repo</button></a>
          {close}
        </article>



      </main>
    )
  }
}

ProjectsMain.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default ProjectsMain
