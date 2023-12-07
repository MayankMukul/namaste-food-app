import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearItem } from '../utils/cartSlice.js'



function Cart(){

    
    const cartItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    let sum=0;

    const dispatchclearitem=()=>{
        dispatch(clearItem());
    }

    return (
        <div className="p-2 mx-auto my-3 bg-slate-300 w-2/3">
        <h1 className="bg-black text-white p-2  font-bold">Cart</h1>
        
            {cartItems.map(item=>{
                let price = ((item.price==null)?"00.00":item.price) / 100;
                sum=sum+Number(price);
                
                return (
                  <div key={item.id} className='m-2 p-2 bg-slate-200 flex justify-between'>
                    <span>{item.name}</span>
                    {/* <span>- Q +</span> */}
                    <span className=''>₹{((item.price==null)?"00.00":item.price) / 100}</span>
                  </div>
                );
            })}
        
        {
            (cartItems.length==0)?
            <p className='italic text-gray-600 text-center m-3'>No items in the cart.</p>:
            <div>
                <p className='text-right mx-5'>Total : ₹ {sum} </p>
                <button className='bg-black text-white m-3 p-1 rounded '>Order now</button>
                <button className='bg-black text-white m-3 p-1 rounded'
                onClick={()=>dispatchclearitem()}
                >Clear Cart</button>

            </div>
        }
        </div>
    )
}

export default Cart;