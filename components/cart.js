import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import './style.css';
import cartContext from '../context/cartContext';


function Cart() {
    const {cartData}=useContext(cartContext);
    const {setCartData}=useContext(cartContext);
    console.log("cart u kosarici   ",cartData);
    let subPrice=0;
    let finalPrice=0;


    


    const CalcPrice = ()=>{
        cartData.map((item)=> {
        subPrice=item.quantity*item.price;
        finalPrice=finalPrice+subPrice;
        })
        return finalPrice;



    }

     

    function DeleteItem(item){
        console.log("usa u delete")
        let newData= cartData.filter(el=>
            {return el.name!==item.name})

        console.log("prije",cartData);
        setCartData([...newData]);

        console.log(cartData);
        console.log(newData);

    }

     function DecrementItem(item){
         const newData=cartData.find(element => element.name===item.name)

          if(newData.quantity == 1){ 
           DeleteItem(item);
            
    }
         else
        
        setCartData(cartData.map(element => element.name===item.name ? {...newData,quantity:newData.quantity-1} : element));

    }

    function IncrementItem(item){
         const newData=cartData.find(element => element.name===item.name)
          if(newData.quantity != 0){ 
           setCartData(cartData.map(element => element.name===item.name ? {...newData,quantity:newData.quantity+1} : element));
           
             
    }

    }




    return (
        <>{
        cartData.length==0 ? (<div>Prazna kosarica</div>):(
            <div>
            <h1>kosarica</h1>
            {cartData.map((item)=>(<div><h2 key={item.name}>{item.name},{"$"+item.price},{item.quantity}  <button className="btn" onClick={()=>{DecrementItem(item) }}>{"-"}</button> 
            <button className="btn" onClick={()=>{IncrementItem(item) }}>{"+"}</button> <button onClick={()=>{DeleteItem(item)}}>delete</button> </h2>
            </div>))}
             <div>{"Ukupan iznos: $"+CalcPrice()}</div>
        </div>)}

    </>

    );
}

export default Cart;