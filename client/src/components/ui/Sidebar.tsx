import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import axios, { AxiosResponse } from 'axios';
import { BounceLoader } from 'react-spinners';
import { useProducts } from '../../Contexts/ProductContext';

  const initializeSidebarState = () : boolean => {
    const sidebarState = localStorage.getItem('sidebarState')
    if(sidebarState && sidebarState?.toLowerCase() === 'true') return true
    return false
  } 

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(initializeSidebarState());
  const {products} = useProducts()


  useEffect(() => {
    localStorage.setItem('sidebarState', String(isExpanded))
  }, [isExpanded])





  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div
    className={`bg-tblack p-4 h-screen transition-all duration-300 fixed top-0 left-0 rounded-r-2xl ${
      isExpanded ? 'w-64' : 'w-12'
    }`}
  >
    {/* Sidebar Content */}
    {isExpanded && (
      <>
      <Link to="/">
      <div className='text-tred text-3xl font-serif flex flex-col items-center m-4 mb-28'>
          StockTracker
        </div>
      </Link>
        <div className="flex flex-col items-center">
        <Link to="/new" className="text-twhite mb-4 underline">
          AddItems
        </Link>

        <div className="flex flex-col items-center text-twhite">
          <p className='text-tred text-2xl my-4'> Products</p>
            {products && products.length>0 ? (
              products.map((product) =>(
            <Link key={product.id} to={`/product/${product.id}`} className="text-twhite mb-4 underline ">
              {product.name}
            </Link>
              )  )
                        
            ) : (
              <BounceLoader color='#ff0000' className='m-8'/>
            )}


        </div>
      </div>
      </>
    )}

    {/* Arrow to toggle sidebar */}
    <div
      className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-tblack p-1 cursor-pointer rounded-full"
      onClick={toggleSidebar}
    >
      {isExpanded ? (
        <FiChevronLeft className="text-twhite" size={24} />
      ) : (
        <FiChevronRight className="text-twhite" size={24} />
      )}
    </div>
  </div>
);
}
