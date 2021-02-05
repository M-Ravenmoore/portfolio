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
          id="TDK"
          className={`${this.props.article === 'TDK' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The Dragons Kitchen</h2>
          <p>A diverse kitchen helper app that I started in a break between classes.
            This app is web driven express app with many features. a few are as follows:
            Authentication and authorization with cookies and Oauth integrations,
            Searches a recipe API for recipes and related information,
            and it can store that recipe information in a SQL database with user sepeartion. 
            Meaning users have individual favorites lists.
          </p>

          <a href="https://dragons-kitchen.herokuapp.com/"><button>Live Site</button></a>
          <a href="https://github.com/M-Ravenmoore/dragons-kitchen"><button>Repo</button></a>

          {close}
        </article>

        <article
          id="TestAPI"
          className={`${this.props.article === 'TestAPI' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Personal Testing Api</h2>
          <p>A helpfull little API server with both open and protected routes.
            It handles users authorization and storage with a mongo db

          </p>
          <a href="https://ravenmoore-testapi.herokuapp.com/"><button>Backend Deployment</button></a>
          <a href="https://github.com/M-Ravenmoore/Ravenmoore-testing-authApi"><button>Repo</button></a>
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
