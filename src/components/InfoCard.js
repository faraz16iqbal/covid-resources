import { Card } from "react-bootstrap";
import React from "react";

export const InfoCard = ({ id, data }) => {
  let variant;
  data.status === "0.5"
    ? (variant = "Warning")
    : data.status === "1"
    ? (variant = "Success")
    : (variant = "Danger");
  console.log(variant);
  return (
    <Card
      bg={variant.toLowerCase()}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2 bgimp"
    >
      <Card.Header className="h4">{data.facility}</Card.Header>
      <Card.Body>
        <Card.Title>
          Distributor : {data.distributor ? data.distributor : "Not mentioned"}
        </Card.Title>

        <Card.Text className="mb-2 h5">
          Extra Info : {data.extrainfo && data.extrainfo}
        </Card.Text>
        <Card.Text className="mb-2 h5">
          Helpline :{" "}
          <Card.Link className="h5" href={`tel:${data.helpline}`}>
            {data.helpline}
          </Card.Link>
        </Card.Text>

        {data.links ? (
          <Card.Text className="mb-2 h5">
            Links : {data.links.toLowerCase()}
          </Card.Text>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
};
