import React, { useEffect, useState } from 'react'
import { getUserByToken } from '../service/auth'
import { useAuth } from '../context/authContext'
import { fetchOrders } from '../service/order';

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getData = async () => {
      const actualUser = await getUserByToken(user.token)
      setUserData(actualUser)

      const orders = await fetchOrders(actualUser._id)
      setOrders(orders)
    }
    getData();
    return () => {

    }
  }, [])

  return userData !== null ? (
    <div className='flex flex-col h-full'>
      <div className='p-4 border w-full m-4 rounded-md flex flex-col items-center'>
        <h1 className='text-lg p-4 border w-fit rounded-sm border-secondary'>Profile</h1>
        <h1 className='mb-4 border-b'>Email: {user.email}</h1>
        {userData.address?.name !== undefined ? <h1 className='mb-4 border-b'>Name: {userData.address?.name}</h1> : <></>}
        <h1 className='mb-4 border-b'>Address</h1>
        {userData.address.street.addressLine1 !== undefined ? <h1>{userData.address.street.addressLine1}</h1> : <></>}
        {userData.address.street.addressLine2 !== undefined ? <h1>{userData.address.street.addressLine2}</h1> : <></>}
        {userData.address.city !== undefined ? <h1>{userData.address.city}</h1> : <></>}
        {userData.address.postalCode !== undefined ? <h1>{userData.address.postalCode}</h1> : <></>}
      </div>
      <div className='p-4'>
        <p>Orders:</p>
        {
          orders.map(o => (
          <div className='p-4 border rounded-md mb-4'>
            <p className='font-bold'>Address</p>
            <div className='flex gap-4 border-b mb-4'>
              <h1>{userData.address.street.addressLine1}</h1>
              <h1>{userData.address.street.addressLine2}</h1>
              <h1>{userData.address.city}</h1>
              <h1>{userData.address.postalCode}</h1>
            </div>
            {o.products.map(p => <div><p>Product: {p.productId.name}</p><p>Quantity: {p.quantity}</p></div>)}
          </div>))
        }
      </div>
    </div>
  ) : <div className="flex h-full justify-center"><span className="loading loading-spinner loading-md"></span></div>
}

export default Profile