import React, { useState } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import StockPopup from './StockPopup';
import { ProductType } from 'src/Contexts/ProductContext';


interface ProductPageProps {
    id: number;
    product: ProductType;
    isLoading: boolean;
}

export const ProductSection: React.FC<ProductPageProps> = ({ id, product, isLoading }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<string>('increase')

    const handleOpenPopup = (action: 'increase' | 'decrease') => {
        setMode(action)
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {isLoading ? (
                <BounceLoader color='#ff0000' className='m-8' />
            ) : (
                
                    <div className="flex flex-col sm:flex-row  justify-between items-center p-8 m-4">


                        {/* Right Half: Product Image */}
                        <div className="w-1/2 flex flex-col justify-center items-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto max-w-full max-h-96 object-contain mt-4"
                            />
                        </div>


                        {/* Left Half: Product Details */}
                        <div className="w-1/2 m-8 flex flex-col justify-center items-center ">
                            <h1 className="text-4xl text-center font-bold p-4 m-8">{product.name}</h1>
                            <p className="text-center mt-4 my-8" >{product.description}</p>
                            <div className="flex items-center mt-8 m-8">
                                <button
                                    className="px-4 py-2 text-xl bg-tblack text-white rounded-l"
                                    onClick={() => handleOpenPopup('decrease')}
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border">{product.stock}</span>
                                <button
                                    className="px-4 py-2 text-xl bg-tblack text-white rounded-r"
                                    onClick={() => handleOpenPopup('increase')}
                                >
                                    +
                                </button>
                            </div>
                        </div>



                        {/* Popup for adjusting stock */}
                        {showPopup && (
                            <StockPopup
                                onClose={handleClosePopup}
                                id={id}
                                mode={mode}
                            />
                        )}
                    </div>
                
            )}
        </>
    );
};
