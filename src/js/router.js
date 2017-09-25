import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import  Item from './item'
import  App from './App'

const AppRouter = (props) => (
	<BrowserRouter>
	    <div>
	    	<Route exact path="/" component={App}>
    			<Route exact path="/:pictureId" component={Item}/>
    		</Route>
        
		</div>
	</BrowserRouter>
)

export default AppRouter;