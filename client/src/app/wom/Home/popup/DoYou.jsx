import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

import Popup from "reactjs-popup";

const DoYou = () => {
  return (
   <div className='doyou'>
     <div className='flex-box'>
       <div>
       <h4>Do you want to Register as a User?</h4>
       </div>
       <div  className='btn-flex'>
        <button>
            <Link to='/session/signup' className='user-btn btn-1'>Yes</Link>
        </button>
        <button>
        <Popup
            trigger={
              <button
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  width:'50px',
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#FF3131",
                  margin:'0'
                }}
              >
                {" "}
               No
                {/* <Link to='/dashboard/invoice' style={{fontStyle:'italic', fontFamily:'-moz-initial', fontWeight:'bold', fontSize:'18px',  backgroundColor:'#0e2a47', border:'2px solid #0e2a47', padding:'10px', borderRadius:'10px', color:'#fff', marginLeft:'20px'}}> Search</Link> */}
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div style={{ height: "40vh" }}>
               <div>
                <img src="https://media.istockphoto.com/id/1079725292/vector/green-tick-checkmark-vector-icon-for-checkbox-marker-symbol.jpg?s=612x612&w=0&k=20&c=OvOpxX8ZFuc5NufZTJDbpwGKvgFUmfZjY68MICmEzX4=" alt="" width='100px' height='100px' style={{marginLeft:'45%'}} />
               <h4 style={{textAlign:'center'
            }} className='flex-h4' >Email has been sent </h4>
                <p style={{fontSize:'22px', marginLeft:'40%'}}>Enquiry Number <span style={{color:'blue', fontWeight:'600'}}> #256</span></p>
             </div>

                 <button style={{marginLeft:'45%'}}>
                    <Link to='/' style={{color:'#fff'}}>Done</Link>
                 </button>
              </div>
            
            )}
          </Popup>
        </button>
       
       </div>
    </div>
   </div>
  )
}

export default DoYou