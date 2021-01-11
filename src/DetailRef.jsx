import React, { useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function DetailRef(props){
    const { id } = useParams();
    const skuRef = useRef();
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
            <select id="size"
                    ref={skuRef}
                >
                <option value="">What Size?</option>
                {
                    product.skus.map((s) => (
                        <option key={s.sku} value={s.sku}>{s.size}</option>
                    ))
                }
            </select>
            <p>
                <button
                    disabled={!skuRef.current.value}
                    className="btn btn-primary"
                    onClick={() => {
                        const sku = skuRef.current.value;
                        if(!sku) return alert('Select size.');
                        props.addToCart(id,);
                        navigate('/cart')
                    }}>
                    Add to cart
                </button>
            </p>
            <img src={`/images/${product.image}`} alt={product.category}/>
        </div>
    );
}