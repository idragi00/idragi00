import React from 'react'
import  ReactDOM  from 'react-dom'
import './style.css';
import { useNavigate } from 'react-router';


function Modal({open, onClose}) {
   const navigate = useNavigate();
  if(!open) return null;
    return ReactDOM.createPortal (
        <div className="modal" id="modal-one">
          <div className="modal-dialog">
            <div className="modal-header">
              <h2>Proizvod je uspjesno dodan u kosaricu!</h2>
            </div>
            <div className="modal-body">
              <p>Zelite li vidjeti stanje u kosarici?</p>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={ ()=>navigate(`/cart`)}>DA</button>
              <button className="btn" onClick={onClose}>NE</button>
              </div>
            
          </div>
             
        </div>
        ,
        document.getElementById('portal-root')
    )
}

export default Modal
