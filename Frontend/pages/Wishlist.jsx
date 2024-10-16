import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/Layout';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Stylish Watch',
      price: 3000,
      image: 'https://m.media-amazon.com/images/I/71qP04Ve+SL._AC_UL600_.jpg',
      description: 'A stylish watch that suits every occasion.',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 2000,
      image: 'https://m.media-amazon.com/images/I/61S8l9c+RZL._AC_UL600_.jpg',
      description: 'Experience the freedom of wireless music.',
    },
    {
      id: 3,
      name: 'Portable Charger',
      price: 1000,
      image: 'https://m.media-amazon.com/images/I/61T9hInGmFL._AC_UL600_.jpg',
      description: 'Keep your devices charged on the go.',
    },
  ];

  return (
    <Layout>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Wishlist</h2>
      <div className="row">
        {wishlistItems.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card wishlist-card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text text-success">Price: ₹{item.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-danger ml-2">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Inline CSS for styling the wishlist cards */}
      <style jsx>{`
        .wishlist-card {
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
        }
        
        .btn {
            display: flex;
            gap: 2px;
        }

        .wishlist-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .card-img-top {
          height: 200px; 
          object-fit: cover; 
          border-radius: 8px 8px 0 0; 
        }
      `}</style>
    </div>

    </Layout>
  );
};

export default Wishlist;
