// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Button.css";

// const Button = () => {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);
//   return (

//     <Link to="signup">
//     <button className="btn">Signup{toggle={toggle} modal={modal}}</button>
//   </Link>
//   )
// }

// export default Button
import './Dropdown.css'
import React, { useState } from 'react';
import Signup from '../pages/Signup'; 
import './Button.css'
const Button = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div >
      <button className="btna" onClick={toggle}>
        Signup
      </button>
      <div className='btnmodal'>
      {modal && <Signup toggle={toggle} setModal={setModal} modal={modal}/>}
      </div>
    </div>
  );
};

export default Button;
