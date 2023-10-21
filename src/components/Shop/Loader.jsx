import Spinner from "react-bootstrap/Spinner";

const Loader = ({ children, loading, error }) => {
  if (loading) {
    return (
      <div className="container py-5">
        <div className="d-flex justify-content-center pt-5">
          <Spinner animation="border" size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <div>{children}</div>;
};

export default Loader;
