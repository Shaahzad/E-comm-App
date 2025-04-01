import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, ReactNode, useEffect } from "react";

export type addTocartDetail = {
    id: string,
    image: string,
    title: string,
    price: number,
    islike: boolean,
    size: string | null;
    color: string | null;
  }

interface CartContextType {
    Carts: addTocartDetail[];
    addToCart: (item: addTocartDetail) => void,
    totalPrice: number,
    deleteItemfromCart: (item: addTocartDetail) => void
}

export const cartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [Carts, setCarts] = useState<addTocartDetail[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        loadCartItem()
    },[])
    const loadCartItem = async () => {
      let cart = await AsyncStorage.getItem("carts")
      const parsedCart: addTocartDetail[] = cart ? JSON.parse(cart) : []; 
      setCarts(parsedCart)
      totalSum(parsedCart)
    }

    const addToCart = async (item: addTocartDetail)=>{
        const itemExists = Carts.findIndex((cart)=> cart.id === item.id)
        if(itemExists === -1){
        const newCartItem = [...Carts, item]
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItem))
        setCarts(newCartItem)
        totalSum(newCartItem)
        }
    }

    const totalSum = (Carts: addTocartDetail[])=>{
     const totalSum = Carts.reduce((acc, item) => acc + item.price, 0);
     setTotalPrice(totalSum)
    }

    const deleteItemfromCart = async (item: addTocartDetail) => {
        const newItem = Carts.filter((cart) => cart.id !== item.id);
        await AsyncStorage.setItem("carts", JSON.stringify(newItem))
        setCarts(newItem);
        totalSum(newItem)
    }
    const value = {
         Carts,
        addToCart,
        totalPrice,
        deleteItemfromCart
        };

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    );
};
