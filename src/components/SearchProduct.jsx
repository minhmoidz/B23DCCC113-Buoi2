import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/productSlice.jsx';
import '../css/Sreach.css'; // Import file CSS cho tìm kiếm

const SearchProduct = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setQuery(e.target.value);
        dispatch(searchProduct(e.target.value));
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Tìm kiếm hàng hóa"
                value={query}
                onChange={handleSearch}
                className="search-input"
            />
            <button className="search-button">
                Tìm
            </button>
        </div>
    );
};

export default SearchProduct;
