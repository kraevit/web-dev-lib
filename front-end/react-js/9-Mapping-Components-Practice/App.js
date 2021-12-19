// Given a list of products (as an array of objects, as seen in producsData.js)
// render a <Product /> component (which you'll alse need to create) for each product in the list.

// Make sure to use the array's map() method to create these components, 
// and don't forget to pass a 'key' prop to it t avoid the warning.

import React from "react";

import Product from "./Product";
import productsData from "./productsData";

function App() {
  /*
  const productComponents = productsData.map(item => 
    <Product 
      key={item.id} 
      name={item.name} 
      price={item.price}
      description={item.description}
    />
  */

    const productComponents = productsData.map(item => {
      // pass props as single obj !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      <Product key={item.id} product={item} />
    });
  );

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App;