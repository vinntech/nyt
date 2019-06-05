import React, {Component} from 'react';
import './App.css';
import AppHeader from './appbar/AppHeader';
import Grid from '@material-ui/core/Grid';
import MostPopularArticles from './articles/MostPopularArticles.Controller'
import MostPopularItemDetail from './article-detail/MostPopularItemDetail.Controller'

/* Routing */
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{


  render(){
    return (
<Router>
      <div className="App">
        <AppHeader nav={this.props}/>
        <Grid>
          <Grid item xs={12}>
            <Switch>
              <Route  exact path="/" component={MostPopularArticles}/>
              <Route  exact path="/articles" component={MostPopularArticles}/>
              <Route  exact path="/articles/:id" component={MostPopularItemDetail}/>
            </Switch>
          </Grid>
        </Grid>
       
      </div>
    </Router>
    );
  }
}

export default App;

/* Remote it for coverage report */
