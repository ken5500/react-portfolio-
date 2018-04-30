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
        {/*Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #2</CardTitle>
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
      {/*Project #3 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #3</CardTitle>
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
    }  else if(this.state.activeTab === 1) {
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
    } else if(this.state.activeTab === 2) {
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
        {/*Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #2</CardTitle>
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
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>Ruby Rails</Tab>
          <Tab>??????</Tab>
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
