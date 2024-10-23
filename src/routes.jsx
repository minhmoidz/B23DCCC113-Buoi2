import React from 'react';
import { useRoutes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <ProductList /> },
        { path: "/add-product", element: <AddProduct /> },
        { path: "/edit-product/:id", element: <EditProduct /> }
    ]);

    return routes;
};

export default AppRoutes;
