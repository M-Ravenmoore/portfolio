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
          <p>Currently raven maze is a simple accelerataromiter maze game for android. built in React Native its features include taping the phones tilt sensor to controll a ball to guide it through a randomly generated maze.
            
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
          <p>A diverse kitchen helper app that i started in a break between classes.
            This app is web driven express app with many features. a few are as follows:
            Authentication and authorixation with cookies and Oauth intigrations.
            searches a recipe API for recipes and related information.
            and it can store that recipe information in a SQL database with user sepeartion. 
            this means it users have individual faveroites lists.
          </p>

          <a href="https://dragons-kitchen.herokuapp.com/"><button>Projects</button></a>
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
