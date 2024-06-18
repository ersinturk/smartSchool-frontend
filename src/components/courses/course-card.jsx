import Image from "next/image";
import React from "react";
import { FiDollarSign, FiTrendingUp, FiUser } from "react-icons/fi";
import { Card, CardBody, CardFooter, CardTitle } from "react-bootstrap";
import "./course-card.scss";

const CourseCard = (props) => {
    const {image, title, user, raiting, price} = props
  return (
    <Card className="course-card">
      <CardBody>
        <Image src={`/images/courses/${image}`} width={400} height={300} alt={title} className="img-fluid rounded" />
        <CardTitle>{title}</CardTitle>
      </CardBody>
      <CardFooter>
        <span>
          <FiUser /> {user}
        </span>
        <span>
          <FiTrendingUp /> {raiting}
        </span>
        <span>
          <FiDollarSign /> {price}
        </span>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
