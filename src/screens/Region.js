/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Table, Form, Button } from "react-bootstrap";
import Spin from "../components/Spinner";
import { fetchData } from "../data";

const Region = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttons, setButtons] = useState([]);
  const [choice, setChoice] = useState("All");

  const location = match.params.id;

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

  const display = (value) => {
    let viewData = data;

    if (value !== "All") {
      viewData = data.filter(function (item) {
        return item.facility.toLowerCase() === value;
      });
    }

    return (
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Facility</th>
            <th>Distributor's Name</th>
            {data[0].city ? <th>City</th> : ""}
            <th>Contact Info</th>
            <th>Extra Info</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {viewData.map((d, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{d.facility}</td>
              <td>{d.distributor && d.distributor}</td>
              {data[0].city && <td>{d.city}</td>}

              <td>
                {d.helpline && (
                  <a href={`tel:${d.helpline}`} className="link2">
                    {d.helpline}
                  </a>
                )}
              </td>
              <td>{d.extrainfo}</td>
              <td>
                {d.links && (
                  <a className="link2" href={d.links} target="_blank">
                    {d.links}
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const onSelect = (e) => {
    setChoice(e.target.value);
    display(e.target.value);
  };

  useEffect(() => {
    getData(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        </Jumbotron>
      </Container>
      <Container className="text-center">
        <Button
          variant="info mb-3 px-5 py-2"
          style={{
            display: loading ? "none" : "inline-block",
            fontSize: "1.25rem",
          }}
          className="buttonn "
          href="/"
        >
          Go Back
        </Button>
        {!loading && (
          <Form responsive>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label style={{ fontSize: "1.25rem" }}>
                Find Service
              </Form.Label>
              <Form.Control as="select" custom onChange={onSelect}>
                <option>All</option>

                {buttons.length !== 0
                  ? buttons.map((b, i) => (
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

      <div className="text-center text-capitalize">
        {loading ? <Spin /> : display(choice)}
      </div>
    </>
  );
};

export default Region;
