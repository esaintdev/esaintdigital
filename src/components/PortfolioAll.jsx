import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PortfolioAll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts(); // Refresh product list after deletion
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="portfolio-area-1 space">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-area-1 space">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-auto">
                {error}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="row gx-30 gy-60">
          {products.map((product) => (
            <div key={product._id} className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <img 
                    src={`http://localhost:5000/${product.picture || 'assets/img/portfolio/1-9.png'}`}
                    alt={product.title}
                    onError={(e) => {
                      e.target.src = 'assets/img/portfolio/1-9.png';
                    }}
                  />
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-details_subtitle flex gap-6">
                      {product.category}
                    </span>
                    <h4 className="portfolio-card-details_title">
                      <Link to={`/project-details/${product._id}`}>
                        {product.title}
                      </Link>
                    </h4>
                    <h4 className="portfolio-card-details_subtitle">
                        {product.description}
                    </h4>
                  </div>
                  <div className="flex space-x-6">
                    <Link to={`/project-details/${product._id}`} className="icon-btn">
                      <img
                        src="assets/img/icon/arrow-up-right.svg"
                        alt="View Details"
                      />
                    </Link>
                    <Link to={`/products/edit/${product._id}`} className="icon-btn">
                      <img
                        src="assets/img/icon/edit.svg"
                        alt="Edit"
                      />
                    </Link>
                    <button 
                      onClick={() => handleDelete(product._id)} 
                      className="icon-btn text-red-500"
                    >
                      <img
                        src="assets/img/icon/delete.svg"
                        alt="Delete"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioAll;
