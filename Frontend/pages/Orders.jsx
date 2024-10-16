import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.css'; 
import Layout from '../src/components/Layout';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 500,
      quantity: 1,
      status: 'Delivered',
      date: '2024-10-14',
      image: 'https://m.media-amazon.com/images/I/31qJ7qfj-9L._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 1000,
      quantity: 2,
      status: 'Shipped (On The Way...)',
      date: '2024-10-12',
      image: '',
    },
  ]);

  return (
    <Layout>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="orders-container w-100 p-4">
        <h2 className="mb-4 text-center">Your Orders</h2>
        <div className="row">
          {orders.map((order) => (
            <div key={order.id} className="col-md-4 mb-4">
              <div className="card order-card">
                <img
                  src={order.image || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt={order.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{order.name}</h5>
                  <p className="card-text">Price: ₹{order.price}</p>
                  <p className="card-text">Quantity: {order.quantity}</p>
                  <p className="card-text">Status: {order.status}</p>
                  <p className="card-text">Date: {order.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</Layout>
  );
};

export default Orders;
