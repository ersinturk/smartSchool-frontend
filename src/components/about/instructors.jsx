"use client"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import instructors from "@/helpers/data/instructors.json";
import InstructorCard from "./instructor-card";

const Instroctors = () => {
  return (
    <Container>
      <Row className="g-4">
        <Col lg={6}>
        <h2>Our Most Experienced Instructors</h2></Col>
        {instructors.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3}>
            <InstructorCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Instroctors;
