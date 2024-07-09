import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
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
          <h2>Page Not Found</h2>
          <p>
            The requested page could not be found on our server. We apologize
            for any inconvenience. Please check the URL for errors or return to
            the homepage. It you believe this is an error, kindly contact our
            support team for assistance. hanK vou tor vour understanding.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
