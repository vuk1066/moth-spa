import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({result}) =>
  <ul> 
          {result.length ? 
        result.map(item=>
          <li key={item.id}>
            {item.id} 
            <img src={item.thumbnailUrl} />
            <Link to={`/${item.id}`}> Profile </Link> 
          </li>) : <li>Loading...</li> 
      } 
  </ul> 

export default ItemList

