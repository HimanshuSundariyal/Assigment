import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';  
import { Container, Row } from 'react-bootstrap';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import CreateProduct from './components/createProduct';
import ProdctListing from './components/productListing'; 
import NoMatch from './components/404';

class App extends React.Component{
  render(){
    return(
      <Container fluid="md">
        <Row>
          <Router>
              <Switch>
                  <Route exact path="/" component={CreateProduct}/>
                  <Route path="/productlist" component={ProdctListing} />
                  <Route path="/" component={NoMatch} />
                  <Route component={NoMatch} />
              </Switch>
          </Router>
        </Row>
      </Container>
    )
  }
}
export default App;
