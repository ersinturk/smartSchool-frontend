import Image from "next/image";
import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import { Card, CardBody, CardSubtitle, CardTitle } from "react-bootstrap";
import "./event-card.scss";

const EventCard = (props) => {
  const { image, title, time, location } = props;
  return (
    <Card className="event-card">
      <CardBody>
        <Image
          src={`/images/events/${image}`}
          width={400}
          height={300}
          alt={title}
          className="img-fluid rounded"
        />
        <CardSubtitle>
          {" "}
          <span>
            <FiClock /> {time}
          </span>
          <span>
            <FiMapPin /> {location}
          </span>{" "}
        </CardSubtitle>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default EventCard;
