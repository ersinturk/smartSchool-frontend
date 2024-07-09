import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const CommonError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Container>
      <Row className="g-5 g-sm-0 align-items-center">
        <Col sm={6}>
          <Image
            src="/images/errors/404.png"
            className="img-fluid"
            width={500}
            height={500}
            alt="Not found"
          />
        </Col>
        <Col sm={6} className="text-center text-sm-start">
          <h2>Something went wrong</h2>
          <p>
            An unexpected error has occurred. We apologize for the
            inconvenience. Our technical team has been notified and 1s working
            to resolve the issue. Please tr again later It the problem persists,
            teel free to contact our support team for assistance. Thank you for
            your understanding.
          </p>
          <button className="btn btn-primary" onClick={() => reset()}>
            Try Again
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default CommonError;
