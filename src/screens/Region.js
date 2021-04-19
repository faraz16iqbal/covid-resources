/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Table, Form } from "react-bootstrap";
import Spin from "../components/Spinner";
import { fetchData } from "../data";

const Region = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [buttons, setButtons] = useState([]);
  const [choice, setChoice] = useState("All");

  const location = match.params.id;

  // const buttonFunction = () => {
  //   function onlyUnique(value, index, self) {
  //     return self.indexOf(value) === index;
  //   }

  //   var tempButtons = [];
  //   data.forEach((d) => {
  //     tempButtons.push(d.facility);
  //   });

  //   var unique = tempButtons.filter(onlyUnique);
  //   // console.log(tempButtons);
  //   setButtons(unique);
  // };

  // const fetchButtons = () => {
  //   const btns = getButtons();
  //   setButtons(btns);
  //   if (btns.length === 0) {
  //     fetchButtons();
  //   }
  // };

  const getData = async (location) => {
    const tempData = await fetchData(location);
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
              <td>
                {d.links && (
                  <a className="link2" href={d.links} target="_blank">
                    {d.links}
                  </a>
                )}
              </td>
              {/* <td>{d.extrainfo && d.extrainfo}</td> */}
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
    // console.log(getData);s
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="text-center">
        <Jumbotron>
          <h1>COVID-19 RESOURCES FOR {location.toUpperCase()}</h1>
        </Jumbotron>
      </Container>
      <Container>
        {!loading && (
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Find Service</Form.Label>
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

        <div className="text-center text-capitalize">
          {loading ? <Spin /> : display(choice)}
        </div>
      </Container>
    </>
  );
};

export default Region;
