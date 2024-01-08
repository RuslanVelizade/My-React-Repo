import React, { useState } from "react";
import './index.scss'
import axios from "axios"
import ProductsTable from "../../components/products-table";
const ProductsPage = () => {
    const [data, setData] = useState([]);

    const BASE_URL = 'https://northwind.vercel.app/api';
    const getData = async () => {
        try {
            let response = await axios(`${BASE_URL}/suppliers`);
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useState(() => {
        getData();
    }, []);

    return <div id="products-page">
        <div className="container">
            <div className="products-page">
                <h1>Products</h1>
                <ProductsTable products={data } />
            </div>
        </div>
    </div>;
};

export default ProductsPage;
