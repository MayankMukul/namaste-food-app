import React from 'react';
import contactus from '../assests/contact_us.svg'

const Contact = ()=>{
    return(
        <div className="m-5 p-4 bg-slate-100 ">
        <h1 className="bg-black text-white p-2 font-bold text-xl">Contact Us</h1>
        <h2 className="font-semibold p-2 ">You can contact us at mayankmukul123@gmail.com.</h2>
        <img src={contactus} className='m-auto h-56 my-2'/>
        </div>
    );
}

export default Contact;