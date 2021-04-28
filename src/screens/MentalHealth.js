/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import { InfoCard } from "../components/InfoCard";
import Spin from "../components/Spinner";
import { fetchData } from "../data";

const MentalHealth = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttons, setButtons] = useState([]);
  const [choice, setChoice] = useState("All");

  const location = match.params.id;

  const display = (value) => {
    let tempData = data;
    if (value !== "All") {
      tempData = data.filter(function (item) {
        return item.facility.toLowerCase() === value;
      });
    }

    function sortBy(field) {
      return function (a, b) {
        return (a[field] > b[field]) - (a[field] < b[field]);
      };
    }

    tempData.sort(sortBy("status")).reverse();
    // setViewData(tempData);

    return tempData.map((d, index) => <InfoCard id={index} data={d} />);
  };

  const onSelect = (e) => {
    setChoice(e.target.value);
    display(e.target.value);
  };
  const getData = async (location) => {
    const tempData = await fetchData(location);
    function sortBy(field) {
      return function (a, b) {
        return (
          (a[field].toLowerCase() > b[field].toLowerCase()) -
          (a[field].toLowerCase() < b[field].toLowerCase())
        );
      };
    }
    tempData.sort(sortBy("facility"));
    setData(tempData);
    setLoading(false);
  };

  useEffect(() => {
    getData(location);
  }, [location]);

  useEffect(() => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    var tempButtons = [];
    data.forEach((d) => {
      tempButtons.push(d.facility);
    });

    var unique = tempButtons.filter(onlyUnique);
    setButtons(unique);
  }, [data]);

  return (
    <>
      <Container className="text-center">
        <Jumbotron>
          <h1>COVID-19 RESOURCES FOR {location.toUpperCase()}</h1>
          <h4 className="mt-5">
            {" "}
            The website is constatly being updated with the latest resources,
            but most of them are <strong>exhaustive.</strong> If the website
            does not show up with any data or the links provided do not work, do
            not panic and come back a couple of minutes later.{" "}
          </h4>
          {/* <CardComp /> */}
        </Jumbotron>
      </Container>
      <Container className="text-center">
        <Button
          variant="info mb-3 px-5 py-2"
          style={{
            display: loading ? "none" : "inline-block",
            fontSize: "1.25rem",
            marginBottom: "2rem",
          }}
          className="buttonn "
          href="/"
        >
          Go Back
        </Button>
        <br />
        <Container
          style={{ display: !loading ? "" : "none" }}
          className="flex-column align-items-center justify-content-around"
        >
          <span className="legends red">Unavailable</span>
          <span className="legends yellow">Unverified (Might Work)</span>
          <span className="legends green">Verified / Available</span>
        </Container>

        {!loading && (
          <Form responsive="true" className="mb-4 mt-4">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom onChange={onSelect}>
                <option>All</option>

                {buttons.length !== 0
                  ? buttons.sort().map((b, i) => (
                      <option key={i} value={b.toLowerCase()}>
                        {b}
                      </option>
                    ))
                  : ""}
              </Form.Control>
            </Form.Group>
          </Form>
        )}
      </Container>

      <Container
        className="text-center text-capitalize"
        style={{ margin: "0 auto" }}
      >
        {loading ? <Spin /> : display(choice)}
      </Container>
    </>
  );
};

export default MentalHealth;
