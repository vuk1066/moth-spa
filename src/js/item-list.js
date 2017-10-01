import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ItemList = ({ result }) =>
  <div>
    {result.length
      ? result.map(item =>
          <LazyLoad height={200}>
            <div key={item.id}>
              <span>
                {" "}{item.id}{" "}
              </span>
              <img src={item.thumbnailUrl} />
              <Link to={`/${item.id}`}> Profile </Link>
            </div>
          </LazyLoad>
        )
      : <h2>Loading...</h2>}
  </div>;

export default ItemList;
