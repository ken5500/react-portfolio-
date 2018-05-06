import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
             <h2>Ken Brisard</h2>
            <img
              src="https://mail.google.com/mail/u/0/?ui=2&ik=33f5049ecc&view=fimg&th=1631c3689c55ce20&attid=0.1.1&disp=emb&attbid=ANGjdJ-Dogs8TkoapqBDwGKfTN5Ym4d8-7D8HD5yTL3-kdxXWT8sOaNE8DI41RWdJbb9W9ce7ynUwK0lv6qahSOuh3wUH_lR7KJTPficrCwapGTd3NXWvTuk98a-1Ps&sz=s0-l75-ft&ats=1525186757640&rm=1631c3689c55ce20&zw&atsh=1"
              alt="Profile Picture"
              style={{height: '250px'}}
            />
          </Cell>

          <Cell col={6} className="contact-right-grid">
            <h2>Contact Me</h2>
            <hr/>
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color:'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                      (516) 770-1696
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color:'white'}}>
                    <i className="fa fa-phone-envelope" aria-hidden="true"/>
                    kbrisard1@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>

            </div>
          </Cell>

        </Grid>
      </div>
  )
}
}


export default Contact;
