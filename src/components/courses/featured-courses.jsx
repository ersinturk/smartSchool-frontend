import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseCard from "./course-card";
import Courses from "./courses";
import "./featured-courses.scss";

const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
        <h2>Featured Courses</h2>
        <Courses featured={true}/>
    </div>
  );
};

export default FeaturedCourses;
