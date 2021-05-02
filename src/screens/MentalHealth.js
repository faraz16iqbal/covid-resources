/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Card, Button } from "react-bootstrap";
import Spin from "../components/Spinner";
import { fetchMHData } from "../data";

const MentalHealth = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(10);

  const getData = async (location) => {
    const tempData = await fetchMHData(location);
    setData(tempData);
    setLoading(false);
  };

  const variants = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];

  const btnClick = () => {
    let next = current + 10;
    if (next > data.length) next = data.length - 1;
    setCurrent(next);
  };

  const display = () => {
    const tempData = data.slice(0, current);

    return tempData.map((x, idx) => (
      <Card
        bg={variants[idx % 8].toLowerCase()}
        key={idx}
        text={variants[idx % 8].toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "30rem" }}
        className="my-4 hoverclass"
      >
        <Card.Header style={{ fontSize: "1.25rem" }}>
          {x.name && x.name}
        </Card.Header>
        <Card.Body>
          <Card.Title> Fee : {x.fee ? x.fee : "Not mentioned"}</Card.Title>
          <Card.Text> Contact Number : {x.contact && x.contact}</Card.Text>
          Email :{" "}
          <Card.Text className="text-lowercase">{x.email && x.email}</Card.Text>
          <Card.Text> Area : {x.area && x.area}</Card.Text>
          <Card.Text>Gender : {x.gender}</Card.Text>
        </Card.Body>
      </Card>
    ));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className="text-center">
        <Jumbotron>
          <h1>MENTAL HEALTH RESOURCES</h1>
          <h4 className="mt-5">
            {" "}
            The website is constatly being updated with the latest resources,
            but most of them are <strong>exhaustive.</strong> If the website
            does not show up with any data or the links provided do not work, do
            not panic and come back a couple of minutes later.{" "}
          </h4>
        </Jumbotron>
        <Container
          className="text-center d-flex flex-wrap justify-content-around "
          style={{ margin: "0 auto" }}
        >
          {loading ? <Spin /> : display()}
        </Container>
        {loading ? (
          " "
        ) : (
          <Button
            className="px-5 py-3 mb-3"
            variant="outline-danger"
            onClick={btnClick}
          >
            SHOW MORE
          </Button>
        )}
      </Container>
    </>
  );
};

export default MentalHealth;
