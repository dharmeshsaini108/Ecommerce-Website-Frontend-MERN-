import React,{createContext, useEffect, useState} from "react";
// import all_product from '../Components/Assets/all_product'
//////////////////////////////////////////

export const ShopContext = createContext(null);
    //default cart
    const getDefaultcart = ()=>{
        let cart = {};
        for (let index = 0; index < 300+1; index++) {
            cart[index] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [all_product,setAll_Product] = useState([]);

    const[cartItems,setCartItems] = useState(getDefaultcart()); 

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])

    const addTocart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems)
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart' , {
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart' , {
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const contextValue = {all_product , cartItems,addTocart,removeFromCart};



    return (
        <ShopContext.Provider value={contextValue}>
           {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
//we mounted this component in index.js