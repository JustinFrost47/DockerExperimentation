import axios, { AxiosResponse } from 'axios'
import React, {useContext, createContext, useEffect, useState, ReactNode} from 'react'
import { toast } from 'react-toastify'

export interface ProductType{
    id: number,
    name: string,
    image: string,
    description: string,
    stock: number
}

export interface ProductContextType {
    products: ProductType[] | null,
    isLoading: boolean,
    error: string | null,
    refetchProducts: () => Promise<void>,
}

interface ProductProviderProps {
    children : ReactNode,
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export const ProductProvider =  ({children} : ProductProviderProps)  => {

    const [products, setProducts] = useState<ProductType[] | null>(null)
    const [isLoading, setisLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    


    const fetchProducts = async () => {
        try{

            const response : AxiosResponse = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}phone`)
            setProducts(response.data.data)
            setisLoading(false)

        } catch(error) {
            toast("Unable To Fetch Products")
            setError('Failed To GET Products')
            setisLoading(false)
        }
    }

    useEffect(() => {

        fetchProducts()

    }, [])

    return(
        <ProductContext.Provider value={{products, isLoading, error, refetchProducts: fetchProducts}}> 
        {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () : ProductContextType => {
    const productContext = useContext(ProductContext)
    if(!productContext) {
        throw new Error('Use Product Hook From Within A Context')
    }

    return productContext
}