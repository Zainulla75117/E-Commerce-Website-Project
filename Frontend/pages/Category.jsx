import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/Layout';

const Category = () => {
  const categories = [
    { name: 'Fashion', path: '/fashion' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'Home Appliances', path: '/home-appliances' },
    { name: 'Beauty & Health', path: '/beauty-health' },
    { name: 'Sports', path: '/sports' },
    { name: 'Toys', path: '/toys' },
  ];

  return (
    <Layout>
    <div className="container py-4">
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div key={category.name} className="col-auto mb-3">
            <Link to={category.path} className="btn btn-danger btn-lg">
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Category;
