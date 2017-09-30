import React from 'react'
import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import ItemList from './item-list'
import Item from './item'

class App extends React.Component { 
  constructor(props) { 
    super(props); 
      this.state={
         items:[]}; 
      }
  componentDidMount(){ 
    fetch(`http://jsonplaceholder.typicode.com/photos`)  
    .then(result=>result.json())  
    .then(items=>this.setState({items}))  
  } 
  render() { 
    return( 
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <ItemList result={this.state.items} />}/>
            <Route exact path="/:pictureId" render={() => 
              <Item image={this.state.items}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
   ) 
  } 
} 

export default App;
