import React, { useState, useEffect } from 'react';
import './productsList.css';

const ProductList = () => {

  const API_URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='product-list'>
     
      {products.map((product, idx) => (
        <div className='product-card' key={product.id}>
          {(idx < 3) && <span className="badge new">New</span>}
          {(product.price < 50) && <span className="badge sale">Sale</span>}
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
