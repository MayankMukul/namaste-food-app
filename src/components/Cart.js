import React from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

function Cart(){

    const cartItems = useSelector(store=>store.cart.items);
    return (
        <div className="p-2 mx-auto my-3 bg-slate-200 w-2/3">
        <h1 className="bg-black text-white p-2  font-bold">Cart</h1>
        
            {cartItems.map(item=>{
                return (
                  <div key={item.id} className='m-2 p-2'>
                    <span>{item.name}</span>
                    <span className='float-right'>₹{((item.price==null)?"00.00":item.price) / 100}</span>
                  </div>
                );
            })}
        
        {
            (cartItems.length==0)?
            <p className='italic text-gray-600 text-center'>No items in the cart.</p>:
            <button className='bg-black text-white m-3 p-1 rounded '>Oder now</button>
        }
        </div>
    )
}

export default Cart;