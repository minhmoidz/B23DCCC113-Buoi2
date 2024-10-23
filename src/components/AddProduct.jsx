import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice.jsx';
import { useNavigate } from 'react-router-dom';
import '../css/AddProduct.css'; // Import file CSS

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddProduct = () => {
        dispatch(addProduct({ id: Date.now(), name, price }));
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <nav className="navbar">
                <h1 className="navbar-title">Quản lý Sản phẩm</h1>
            </nav>
            <h2 className="text-center mb-4">Thêm Hàng Hóa</h2>
            <div className="card p-4">
                <div className="mb-3">
                    <label className="form-label">Tên Hàng Hóa</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá Hàng Hóa</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button onClick={handleAddProduct} className="btn btn-success colorful-btn">
                    Thêm Hàng Hóa
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
