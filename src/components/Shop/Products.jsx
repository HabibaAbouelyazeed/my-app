import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './shop.css'
import { Link } from "react-router-dom";
const Products = () => {
    let [Products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    // console.log(Products);
    const getProducts = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    return (
        <div className="container py-5">
            <h2 className="mb-5">Products List</h2>
            <div className="products-wrapper row justify-content-between">
                {Products?.map(item => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <Card className="p-3 mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} style={{ height: '15rem' }} />
                                <Card.Body>
                                    <Card.Title className="prod-title">{item.title}</Card.Title>
                                    <Card.Text className="prod-desc"> {item.description}</Card.Text>
                                    <Card.Text>${item.price}</Card.Text>
                                    <Link to={`/details/${item.id}`} >
                                        <Button variant="dark">Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default Products;