import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    if (!id) {

      navigate('/');
    } else {

      console.log('Product ID:', id);
    }
  }, [id, navigate]); 

  return (
    <div>
      <h1>Product Page</h1>
      {id ? (
        <p>Product ID: {id}</p>
      ) : (
        <p>Redirecting to home...</p>
      )}
    </div>
  );
};

export default ProductPage;
