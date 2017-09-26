import React from 'react'
import { Link } from 'react-router-dom'
import jsonData from './testData'


class Item extends React.Component { 
  constructor() { 
    super(); 
     this.state={items:jsonData}; 
  } 
  render() { 
	
	let item = this.state.items.find((item)=> item.id == this.props.match.params.pictureId)

    return( 
    	<p> 
    		<div>       {item.id} 
                <img src={item.thumbnailUrl} />
                <Link to={`/`}> Home </Link> 
              </div>
    	</p>
   ) 
  } 
}

export default Item;