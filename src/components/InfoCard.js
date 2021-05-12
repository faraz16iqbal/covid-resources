/* eslint-disable react/jsx-no-target-blank */
import { Card } from "react-bootstrap";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import InfoIcon from "@material-ui/icons/Info";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import React from "react";

export const InfoCard = ({ data, index }) => {
  let variant = [];
  data.status === "0.5"
    ? (variant = ["Warning", "yellow"])
    : data.status === "1"
    ? (variant = ["Success", "green"])
    : (variant = ["Danger", "red"]);

  return (
    <>
      <Card
        id={index}
        bg="light"
        text="dark"
        border={variant[0].toLowerCase()}
        className="my-4 bgimp hoverclass"
        style={{ width: "30rem" }}
      >
        <Card.Header
          className={variant[1]}
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          {data.facility}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <strong>
              Distributor <EmojiPeopleIcon />
            </strong>{" "}
            : {data.distributor ? data.distributor : "Not mentioned"}
          </Card.Title>

          <Card.Text className="pb-3 cardfont">
            <strong>
              City <LocationCityIcon />
            </strong>{" "}
            : {data.city && data.city}
          </Card.Text>
          <Card.Text className="pb-3 cardfont">
            <strong>
              Extra Info <InfoIcon />{" "}
            </strong>{" "}
            : {data.extrainfo && data.extrainfo}
          </Card.Text>
          <Card.Text className="pb-3 cardfont">
            <strong>
              Helpline <ContactPhoneIcon />{" "}
            </strong>{" "}
            :{" "}
            {data.helpline &&
              data.helpline.split("|").map((help, id) => (
                <span style={{ display: "inline" }} key={id}>
                  {help.replace(",", "")}{" "}
                </span>
              ))}
          </Card.Text>

          {data.links ? (
            <Card.Text className="pb-3 cardfont ">
              <strong>Links</strong> :
              <a
                href={data.links}
                target="_blank"
                className="text-lowercase links"
              >
                {" "}
                {data.links}{" "}
              </a>
            </Card.Text>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </>
  );
};
