import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import ProductList from '../src/components/ProductList';
import AddProduct from '../src/components/AddProduct';
import EditProduct from '../src/components/EditProduct';
import Guide from '../src/components/Guide.jsx'; // Tạ

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/edit-product/:id" element={<EditProduct />} />
                    <Route path="/guide" element={<Guide />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
