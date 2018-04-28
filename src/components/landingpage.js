import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
  return(
    <div style={{width: '100%' , margin: 'auto'}}>
<Grid className="landing-grid">
  <Cell col={12}>
    <img
      src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
    alt="avatar"
    className="avatar-img"
  />
  <div classNamr="banner-text">
    <h1>Full Stack Web Developer</h1>

    <hr/>
    <p>Html/CSS | Bootstrap | Javascript | React | React Native | Node.Js | Express | MongoDB</p>

    <div className="social-links">

      {/* Linkendin */}
      <a href="http://google.com" rel="noopener nopreferrer" target="_blank">
      <i className="fa fa linkedin-square" aria-hidden="true" />

    </a>  {/* Github */}
      <a href="http://google.com" rel="noopener nopreferrer" target="_blank">
      <i className="fa fa github-square" aria-hidden="true" />
    </a>

    {/* Freecodecamp */}
      <a href="http://google.com" rel="noopener nopreferrer" target="_blank">
      <i className="fa fa free-code-camp" aria-hidden="true" />
    </a>

    {/* Youtube */}
      <a href="http://google.com" rel="noopener nopreferrer" target="_blank">
      <i className="fa fa youtube-square" aria-hidden="true" />
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
