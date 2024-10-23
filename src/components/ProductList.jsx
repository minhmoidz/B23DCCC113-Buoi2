import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, searchProduct } from '../redux/productSlice.jsx'; // Đảm bảo có import searchProduct
import { Link } from 'react-router-dom';
import SearchProduct from './SearchProduct'; // Import thành phần tìm kiếm
import '../css/ProductList.css'; // Import file CSS

const ProductList = () => {
    const products = useSelector((state) => state.products.products);
    const searchQuery = useSelector((state) => state.products.searchQuery); // Giả sử bạn có searchQuery trong redux
    const dispatch = useDispatch();

    // Lọc sản phẩm dựa trên truy vấn tìm kiếm
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <nav className="navbar">
                <h1 className="navbar-title">Quản lý Sản phẩm</h1>
            </nav>
            <h2 className="text-center mb-4">Danh Sách Hàng Hóa</h2>
            <div className="d-flex justify-content-center mb-3">
                <label>
                    <Link to="/add-product" className="btn btn-add-product">Thêm Hàng Hóa</Link>
                    <SearchProduct /> {/* Thêm thành phần tìm kiếm */}
                </label>
            </div>
            
            <div className="product-list-container">
                <ul className="list-group">
                    {filteredProducts.map((product) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                            <div>
                                <strong>{product.name}</strong> - {product.price} VND
                            </div>
                            <div>
                                <button
                                    onClick={() => dispatch(deleteProduct(product.id))}
                                    className="btn btn-delete me-2"
                                >
                                    Xóa
                                </button>
                                <Link to={`/edit-product/${product.id}`} className="btn btn-edit">
                                    Chỉnh sửa
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
