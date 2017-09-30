import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ItemList = ({ result }) =>
  <div>
    {result.length
      ? result.map(item =>
          <div key={item.id}>
            <span>
              {" "}{item.id}{" "}
            </span>
            <img src={item.thumbnailUrl} />
            <Link to={`/${item.id}`}> Profile </Link>
          </div>
        )
      : <h2>Loading...</h2>}
  </div>;

export default ItemList;
