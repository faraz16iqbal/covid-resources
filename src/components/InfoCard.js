import { Card } from "react-bootstrap";
import React from "react";

export const InfoCard = ({ data }) => {
  let variant;
  data.status === "0.5"
    ? (variant = "Warning")
    : data.status === "1"
    ? (variant = "Success")
    : (variant = "Danger");
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
          City : {data.city && data.city}
        </Card.Text>
        <Card.Text className="mb-2 h5">
          Extra Info : {data.extrainfo && data.extrainfo}
        </Card.Text>
        <h5 className="mb-2 h5">
          Helpline :{" "}
          {data.helpline &&
            data.helpline.split("|").map((help, id) => (
              <li>
                <Card.Link
                  key={id}
                  className="h5"
                  href={`tel:${data.helpline}`}
                >
                  {help.replace(",", "")}
                </Card.Link>
              </li>
            ))}
        </h5>

        {data.links ? (
          <Card.Text className="mb-2 h5 text-lowercase">
            Links : {data.links}
          </Card.Text>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
};
