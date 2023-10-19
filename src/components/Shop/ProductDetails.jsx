import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () =>{
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        getProductsDetails();
    }, [])

    // console.log(productDetails);
    const getProductsDetails = () => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProductDetails(json))
    }

    if(productDetails){
        return(
            <div className="container py-5">
                <h2 className="mb-5">Products Details</h2>
                <div className="row justify-content-between">
                    <figure className="col-12 col-md-3">
                        <img src={productDetails.image} alt="prod img" className="img-fluid"/>
                    </figure>
                    <div className="col-12 col-md-8">
                        <h3 className="mb-5">{productDetails.title}</h3>
                        <h5>Description:</h5>
                        <p className="px-4 mb-4">{productDetails.description}</p>
                        <p className="fw-bold mb-4">Price: <span className="fw-normal">${productDetails.price}</span></p>
                        <p className="fw-bold">Rating: <span className="fw-normal">{productDetails.rating?.rate}</span></p>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductDetails;