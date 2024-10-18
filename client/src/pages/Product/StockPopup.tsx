import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useProducts } from '../../Contexts/ProductContext';

// Define the props for the StockPopup component
interface StockPopupProps {
    onClose: () => void;
    id: number,
    mode: string
}

const StockPopup: React.FC<StockPopupProps> = ({ onClose, id, mode }) => {

    const {refetchProducts} = useProducts()
    const [stockAmount, setStockAmount] = useState<number>(0);

    const sendUpdate = async () => {
        let apiUrl =`${import.meta.env.VITE_APP_BACKEND_URL}phone/`

        if(mode==='increase'){
            apiUrl = apiUrl + 'increaseStock'
        } else if( mode === 'decrease'){
            apiUrl = apiUrl + 'decreaseStock'
        }

        try{

            const payload = {
                amount: stockAmount, 
                id: id
            }

            const response : AxiosResponse = await axios.patch(apiUrl, payload)

            if(response.status === 200) {
                refetchProducts()
                toast("Stock Updated")
            }


        } catch(error) {
            toast("Unable To Update Stock")

        }
    }

    const handleConfirm = () => {
        sendUpdate();
        onClose(); 
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg relative w-1/3">
                {/* Close Button */}
                <button 
                    className="absolute top-2 right-2 text-lg" 
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Stock Adjustment */}
                <h2 className="text-2xl font-bold mb-4">Adjust Stock</h2>
                <input
                    type="number"
                    value={stockAmount}
                    onChange={(e) => setStockAmount(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded"
                    min="0"
                />

                {/* Confirm Button */}
                <div className="flex justify-end mt-4">
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StockPopup;
