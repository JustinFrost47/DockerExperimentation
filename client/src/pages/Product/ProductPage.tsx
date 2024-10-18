import { BounceLoader } from 'react-spinners';

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts, ProductType } from '../../Contexts/ProductContext';
import { toast } from 'react-toastify';

import { ProductSection } from './ProductSection';

const ProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { products, isLoading } = useProducts()
  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {

    if (!id) {

      navigate('/');
    } else {

      console.log('Product ID:', id);

    }

  }, [id, navigate]);

  useEffect(() => {

    if (products) {

      const currentProduct: ProductType | undefined = products.find(item => item.id === Number(id))

      console.log(currentProduct)
      console.log(products)

      if (currentProduct) {
        setProduct(currentProduct)
      } else {
        toast("This Item Does Not Exist")
      }
    }

  }, [products, id])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {
        (isLoading ? (
          <BounceLoader color='#ff0000' className='m-8' />
        ) : (
          <>

            {product ? (
              <ProductSection id={product.id} product={product} isLoading={isLoading} />
            ) : (
              <p>Redirecting to home...</p>
            )}
          </>
        ))
      }
    </div>


  );
};

export default ProductPage;
