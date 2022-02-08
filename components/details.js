import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useContext } from 'react';
import './style.css';
import cartContext from '../context/cartContext';
import Modal from './Modal';

function Details() {
   
    const {state} = useLocation();
    const data = state.props;
    const {cartData}=useContext(cartContext);
    const {setCartData}=useContext(cartContext);
    const [isOpen, setISOpen] = useState(false);

    useEffect(() => {
        console.log("state",state);
        console.log("data",data);
        console.log("cartdata",cartData);
    })

    const AddToCart= ()=>{
        setISOpen(true);
        let flag=0;
        console.log("prije ifa");
        if(cartData.length==0){
            flag=1;
            console.log("vanjski if");
        setCartData((cartData)=> [...cartData,{name:data.name, price:data.price, quantity:1}]); }
        else{
            console.log("vanjski else");
            cartData.map((item)=>{
             if(item.name===data.name)
            {
                flag=1;
                console.log("if");
                item.quantity=item.quantity+1;
                console.log("item   ",item);
                
            } 
        });

        if(flag==0){
            setCartData((cartData)=> [...cartData,{name:data.name, price:data.price, quantity:1}]);
        }

        
    }
    }
    
   
    return (
    <div>
        <h1>{data.name}</h1>
        <h2>{data.details}</h2>
        <h2>{"$"+data.price}</h2>;
        <button className="card button" onClick={AddToCart}>DODAJ U KOSARICU</button>
        <Modal open={isOpen} onClose={() => setISOpen(false)} ></Modal>
    </div>
    
    
    
    );
}

export default Details;