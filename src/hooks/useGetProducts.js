import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {

    const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fecthData(){
			const response = await axios(API);
			setProducts(response.data);
		};
		fecthData();
    }, [API]);


	/*
    useEffect(() => {
		const getProducts = async () => {
			const response = await axios(API);
			setProducts(response.data);
		};
		getProducts();
    }, []);*/

    return products;
};

export default useGetProducts;

	