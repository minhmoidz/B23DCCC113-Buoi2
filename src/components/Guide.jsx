import React from 'react';

const Guide = () => {
    return (
        <div className="guide-container">
            <h2 className="text-center mb-4">Hướng Dẫn</h2>
            <p>
                <strong>Link Demo:</strong> <a href="https://thuchanh-buoi2.vercel.app/" target="_blank" rel="noopener noreferrer">https://thuchanh-buoi2.vercel.app/</a>
            </p>
            <p>
                <strong>Yêu cầu:</strong>
            </p>
            <ul>
                <li>Tên Repo trên git: <strong>Mã SV-Buoi2</strong>, VD: <strong>B23DCCN331-Buoi2</strong></li>
                <li>Email: <strong>phanquangthanh0217@gmail.com</strong> hoặc username: <strong>thanhpq1702</strong></li>
                <li>Bắt buộc sử dụng Redux, React Router</li>
            </ul>
        </div>
    );
};

export default Guide;
