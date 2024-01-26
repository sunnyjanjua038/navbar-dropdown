import {useRef,useEffect} from 'react'
import './Signup.css';
const Signup = ({ setModal, modal}) => {
    const modalRef = useRef(null);
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };
    if (modal) {
      document.addEventListener('mousedown', closeOnOutsideClick);
    }

    return () =>{
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }


  }, [modal]);

  return (
    <div >
    <div className='modal-bg' ref={modalRef}>
    <div className='first-input ' style={{color:'black'}} >
    
      <h5 >First Name</h5>
      <input type='text'/>
      <h5>Last Name</h5>
      <input type='text'/>
      <h5 >Email</h5>
      <input type='text'/>
      <h5 >Password</h5>
      <input type='password'/> <br/>
      <button type='submit'>submit</button>
      <button color="secondary" onClick={()=>setModal(false)}>
            Cancel
          </button>
      </div>
      
    </div>
    </div>
  )
}

export default Signup

// SignupModal.js// SignupModal.js
// SignupModal.js

// import React, { useRef, useEffect } from 'react';
// import './Signup.css';

// const SignupModal = ({ toggleModal }) => {
//   const modalRef = useRef(null);

//   useEffect(() => {
//     const closeOnOutsideClick = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         toggleModal();
//       }
//     };

//     document.addEventListener('mousedown', closeOnOutsideClick);

//     return () => {
//       document.removeEventListener('mousedown', closeOnOutsideClick);
//     };
//   }, [toggleModal]);

//   return (
//     <div className="modal-bg">
//       <div className="modal-content" ref={modalRef}>
//         <div className="first-input">
//           {/* Modal content */}
//           <button className="btn" onClick={toggleModal}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupModal;
