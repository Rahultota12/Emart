import React, { useState, useEffect } from 'react';

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      

      if (componentMounted) {
        const responseData = await response.clone().json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
        
      
      }
      return () =>{
        componentMounted = false;
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Latest Products</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
