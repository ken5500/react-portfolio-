import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
  return(
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img
            src="https://mail.google.com/mail/u/0/?ui=2&ik=33f5049ecc&view=fimg&th=1631c3689c55ce20&attid=0.1.1&disp=emb&attbid=ANGjdJ-Dogs8TkoapqBDwGKfTN5Ym4d8-7D8HD5yTL3-kdxXWT8sOaNE8DI41RWdJbb9W9ce7ynUwK0lv6qahSOuh3wUH_lR7KJTPficrCwapGTd3NXWvTuk98a-1Ps&sz=s0-l75-ft&ats=1525186757640&rm=1631c3689c55ce20&zw&atsh=1"
            alt="avatar"
            style={{height: '200px'}}
          />
        </div>

        <h2 style={{paddingTop: '2em', color: 'white' }}>Ken Brisard</h2>
        <h4 style={{color: 'white'}}>Full Stack Web Developer</h4>
        <hr style={{borderTop: 'color: white', width: '50%'}}/>
        <p> My passion for web development started many years ago. Without any technical knowledge, I had to rely on freelancers and web development firms domestically and internationally to build my projects. It turned out to be one bad experience after another. These bad experiences are what motivated me to become a web developer myself and have given me the unique perspective of what it’s like to be the customer, the programmer and everything in between.</p>
        <hr style={{borderTop: 'color: white', width: '50%'}}/>
        <h5>Address</h5>
        <p>1 Hacker Way Menlo Park, 94025</p>
        <h5>Phone</h5>
        <p>(516) 770-1696</p>
        <h5>Email</h5>
        <p>kbrisard1@gmail.com</p>
        <h5>Web</h5>
        <p>mywebsite.com</p>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>

          <Education
            startYear={1994}
            endYear={1998}
            schoolName="New York Insitute of Technology Old Wesbury, NY"
            schoolDescription=" New York Institute of Technology (NYIT) offers 90 degree programs, including undergraduate, graduate, and professional degrees, in more than 50 fields of study, including architecture and design; arts and sciences; education; engineering and computing sciences; health professions; management; and medicine"
          />

          <Education
            startYear={2018}
            endYear={2018}
            schoolName="Wyncode Academy Miami,Fl"
            schoolDescription=" Wyncode Academy’s curriculum is based on industry leading concepts and technologies. Your typical day begins with an instructor-led session about a particular concept followed by time to apply what you have learned in a practical, project-based example – often mimicking websites or popular web applications that you already know and use. The days are capped off with business development and mentoring sessions."
          />
          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Experience</h2>

          <Experience
            startYear={2017}
            endYear={2018}
            jobName="Demain LLC - Ft.Lauderdale, FL"
            jobDescription=" Responsible for finding, developing and funding new start up's and high growth companies for portfolio. Provide our clients with both Angel Investor & Seeker step by step guides, bridging the two into
            seamless transaction"

          />

          <Experience
            startYear={2004}
            endYear={2016}
            jobName="Brisard & Brisard Inc - New York City, NY"
            jobDescription=" Managed portfolio and selected US and foreign stocks to invest in - earning 11% average annual
            return over 2 years focused in Oil & Gas
            Analyzed market fundamentals and invested 5% of portfolio in company due to planned
            expansion into deep ocean fields and hedging strength relative to competitors
            Compared company to competitors in similar niche market and found that pipeline was weaker;
            shorted stock and earned 10% return over 6 months.
            Selected to appear in Wall Street Warriors 3 show that aired on HULU
            Managed in public and private equity $100 million in assets."

          />

          <Experience
            startYear={2004}
            endYear={2006}
            jobName="GunnAllen Financial New York City, NY "
            jobDescription=" Helped clients with ongoing needs and raised money in capital markets by issuing
            debt or selling equity in the companies.
            Assisted clients with mergers and acquisitions (M&As) opportunities, and advising
            them on unique investment opportunities."

          />

          <Experience
            startYear={1998}
            endYear={2004}
            jobName="Raymond James Financial New York, NY "
            jobDescription=" Lead team in investment product sales; oversee relationship-banking team with a tireless focus on increasing revenue and maximizing profitability. Consult with clients to assess financial situations and goals; develop targeted investment strategies.

."

          />
          <hr style={{borderTop: '3px white'}} />
          <h2>Skills</h2>
          <Skills
          skill="javascript"
          progress={100}
          />
          <Skills
          skill="HTML/CSS"
          progress={80}
          />
          <Skills
          skill="NODEJS"
          progress={50}
          />
           <Skills
          skill="REACT"
          progress={25}
          />


        </Cell>
      </Grid>
    </div>
   )
  }
 }


export default Resume;
