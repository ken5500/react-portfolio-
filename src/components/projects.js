import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0){
      return(
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url("https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350") center /cover'}} >Dash</CardTitle>
          <CardText>
          A portal that will allow parents to access student updates with teachers in a school
          </CardText>
          <CardActions border>
            <Button colored>
              <a href='https://github.com/AnansiRafa/dash'>GitHub</a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
        {/*Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url("https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center /cover'}} >Api Book </CardTitle>
        <CardText>
         Built an API that allows workflow throughout a libary
        </CardText>
        <CardActions border>
          <Button colored><a href='https://github.com/ken5500/Apibook'>GitHub</a></Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share'/>
        </CardMenu>
      </Card>
      {/*Project #3 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '176px', background:'url("https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350") center /cover'}} >RainForest</CardTitle>
      <CardText>
        A  website that allows you to access
      </CardText>
      <CardActions border>
        <Button colored>
          <a href='https://github.com/ralph534/Rainforest'>GitHub</a>
        </Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name='share'/>
      </CardMenu>
    </Card>
  </div>
      )
    }  else if(this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url(" data:image/jpeg;base64,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") '}} ></CardTitle>
          <CardText>
            Portfolio Website
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Demo</Button>
            <a href='https://github.com/ken5500/react-portfolio-'>Github</a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
  </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background:'url() center /cover'}} >JavaScript</CardTitle>
          <CardText>
            What ever I want to describe project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>

  </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #1</CardTitle>
          <CardText>
            What ever I want to describe project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
  </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState( { activeTab: tabId})} ripple>
          <Tab>Ruby</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>

        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Project;
