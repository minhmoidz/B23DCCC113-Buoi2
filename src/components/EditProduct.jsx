import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../redux/productSlice.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Edit.css'; // Import file CSS

const EditProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) =>
        state.products.products.find((p) => p.id === Number(id))
    );

    const [name, setName] = useState(product ? product.name : '');
    const [price, setPrice] = useState(product ? product.price : '');

    useEffect(() => {
        if (!product) {
            navigate('/');
        }
    }, [product, navigate]);

    const handleEditProduct = () => {
        dispatch(editProduct({ id: Number(id), name, price }));
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <nav className="navbar">
                <h1 className="navbar-title">Quản lý Sản phẩm</h1>
            </nav>
            <h2 className="text-center mb-4">Chỉnh Sửa Hàng Hóa</h2>
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
                <button onClick={handleEditProduct} className="btn btn-primary colorful-btn">
                    Lưu Thay Đổi
                </button>
            </div>
        </div>
    );
};

export default EditProduct;
