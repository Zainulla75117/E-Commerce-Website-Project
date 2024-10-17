import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/Layout';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 500,
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/31qJ7qfj-9L._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 1000,
      quantity: 2,
      image: '',
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Layout title={"Shopping Cart"} >
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="cart-container text-center">
        <h2>Your Cart</h2>
        <table className="cart-table table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="cart-rows">
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image || 'https://via.placeholder.com/100'}
                    alt={item.name}
                    style={{ width: '50px', marginRight: '10px' }}
                  />
                  {item.name}
                </td>
                <td>₹{item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-total">
          <h3>Total: ₹{calculateTotal()}</h3>
        </div>

        <button className="btn btn-success checkout-btn">Checkout</button>
      </div>
    </div>
    </Layout>
  );
};

export default Cart;
