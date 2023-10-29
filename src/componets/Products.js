import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        console.log(filter);
      
      }
      return () =>{
        componentMounted = false;
      }
    }

    getProducts();
  }, []);

  const Loading =() =>{
    return(
      <>
        Loading.......
      </>
    )
  }
   
   const ShowProducts =() =>{
    return(
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Women's Clothing</button>
          <button className="btn btn-outline-dark me-2">jewelery</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        {filter.map((product)=>{
          return(
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className='card-img-top' alt="" style={{height:"250px"}}/>
                  <div className="card-body">
                    <h5 className="card-title mb-0" >{product.title.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link className="btn btn-outline-dark">Buy Now</Link>
                  </div>
                </div>  
              </div>
            </>     
          )
        })}
      </>
    )
   }

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
    </>
  );
}

export default Products;
