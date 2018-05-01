import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render() {
  return(
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img
            src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
            style={{height: '2000px'}}
          />
        </div>

        <h2 style={{paddingTop: '2em'}}>Paul Hanna</h2>
        <h4 style={{color: 'grey'}}>Programmer</h4>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        
        </Cell>
        <Cell className="resume-right-col" col={8}>Right Side</Cell>
      </Grid>
    </div>
   )
  }
 }


export default Resume;
