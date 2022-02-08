import React from 'react'
import './style.css';
import { useNavigate } from 'react-router';

const ShopItem = (props) => {
    const navigate = useNavigate();
    console.log(props);

    return (
        <div key={props.props.id} className="card">
            <h2>{props.props.name}</h2> 
            <h3 className="price">{"$"+props.props.price}</h3>
            <button className="card button" onClick={()=>navigate(`/details/${props.props.name}`,{state:props})}>DETALJI</button>
        </div>
    )
}

export default ShopItem
