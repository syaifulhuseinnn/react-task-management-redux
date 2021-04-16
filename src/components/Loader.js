import { Container, Spinner } from "react-bootstrap";
export default function Loader({ status, statusText }) {
  return (
    <Container
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ height: "500px" }}>
      {status && statusText ? (
        <>
          <h1 className="text-light text-center">
            {status} {statusText}
            <br />
            <small className="text-warning">Please check url</small>
          </h1>
        </>
      ) : (
        <>
          <Spinner animation="grow" variant="secondary" />
          <small className="text-light mt-4">Please wait</small>
        </>
      )}
    </Container>
  );
}
