import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Detail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: product, loading, error } = useFetch(`products/${id}`);


    if(!product) return <PageNotFound/>
    if(error) throw error;

    if (loading) return <Spinner />;

    return (
        <div id="detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p id="price">${product.price}</p>
            <p>
                <button className="btn btn-primary" onClick={() => navigate('/cart')}>
                    Add to cart
                </button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category}/>
        </div>
    );
}