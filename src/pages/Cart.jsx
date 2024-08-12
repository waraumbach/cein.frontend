import React from 'react'
import { Link } from 'react-router-dom'
import { useOrder } from '../context/orderContext'

const Cart = () => {
  const { orderItems, totalPrice } = useOrder();

  return (
    <div>
      <div className='flex flex-col gap-4 p-4'>
        <div className='flex justify-between items-center gap-4 p-4'>
            <p className='w-24'></p>
            <p>Name</p>
            <p>Quantity</p>
            <p className=''>Price</p>
          </div>
        {Object.keys(orderItems).map(item => (
          <div className='flex justify-between items-center gap-4 border rounded-md p-4'>
            <img className="object-cover w-24 h-24" src={orderItems[item].images[0]}/>
            <p>{orderItems[item].name}</p>
            <p>{orderItems[item].quantity}</p>
            <p className=''>{orderItems[item].quantity * orderItems[item].price} $</p>
          </div>
        ))}
        <p className='self-end'>Total {totalPrice()} $</p>
        <Link className='self-end p-4 text-white bg-primary hover:bg-opacity-20' to="/checkout">Proceed to Checkout</Link>
      </div>
    </div>
  )
}

export default Cart