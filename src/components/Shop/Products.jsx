import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useGetProduct from "../../hooks/useGetProduct";
import Loader from "./Loader";
import "./shop.css";

const Products = () => {
  const [productsData, loading, error] = useGetProduct();

  return (
    <div className="container py-5">
      <h2 className="mb-5">Products List</h2>
      <Loader loading={loading} error={error}>
        <div className="products-wrapper row justify-content-between">
          {productsData?.map((item) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                key={item.id}>
                <Card className="p-3 mx-auto" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title className="prod-title">{item.title}</Card.Title>
                    <Card.Text className="prod-desc">
                      {" "}
                      {item.description}
                    </Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <Link to={`/details/${item.id}`}>
                      <Button variant="dark">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Loader>
    </div>
  );
};

export default Products;
