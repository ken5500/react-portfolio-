import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
  return(
    <div style={{width: '100%' , margin: 'auto'}}>
     <Grid className="landing-grid">
        <Cell col={12}>

  <div className="banner-text">
    <h1> Ken Brisard</h1>
    <h1>Full Stack Web Developer</h1>


    <hr/>
      <p>Html 5/CSS | Bootstrap | Javascript | React.JS | Ruby on Rails | SQL | Agile Project Management | JQuery | </p>

    <div className="social-links">

      {/* Linkendin */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true" />
     </a>

       {/* Github */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github-square" aria-hidden="true" />
    </a>

    {/* Freecodecamp */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-free-code-camp" aria-hidden="true" />
    </a>

    {/* Youtube */}
      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-youtube-square" aria-hidden="true" />
    </a>

    </div>
        </div>
       </Cell>
      </Grid>
    </div>
   )
  }
 }


export default Landing;
