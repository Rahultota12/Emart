import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
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
       <div className="col-md-3">
        <Skeleton style={{height:"350px"}}/>
       </div>
       <div className="col-md-3">
        <Skeleton style={{height:"350px"}}/>
       </div>
       <div className="col-md-3">
        <Skeleton style={{height:"350px"}}/>
       </div>
       <div className="col-md-3">
        <Skeleton style={{height:"350px"}}/>
       </div>
      </>
    )
  }
  const filterProduct = (category) => {
   
    const filteredData = data.filter(product => product.category === category);
    setFilter(filteredData);
  }
   
   const ShowProducts =() =>{
    return(
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((product)=>{
          return(
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className='card-img-top img-fluid' alt="" style={{height:"250px"}}/>
                  <div className="card-body">
                    <h5 className="card-title mb-0" >{product.title.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link className="btn btn-outline-dark">Buy Now</Link>
                  </div>
                </div>  vide 26:19
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
