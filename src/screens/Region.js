import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Table } from "react-bootstrap";
import Spin from "../components/Spinner";
import { fetchData } from "../data";

const Region = ({ match }) => {
  const [data, setData] = useState([]);

  const location = match.params.id;

  const getData = async (location) => {
    const tempData = await fetchData(location);
    // console.log(tempData);
    setData(tempData);
  };

  useEffect(() => {
    console.log(data);
    getData(location);
    console.log(data);
  }, []);

  return (
    <>
      <Container className="text-center">
        <Jumbotron>
          <h1>COVID-19 RESOURCES FOR {location.toUpperCase()}</h1>
        </Jumbotron>
      </Container>

      <div className="px-5 text-center text-capitalize">
        {data.length === 0 ? (
          <Spin />
        ) : (
          <Table striped bordered hover size="sm" variant="dark" responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Facility</th>
                <th>Distributor's Name</th>
                {data[0].city ? <th>City</th> : ""}
                <th>Contact Info</th>
                <th>Links</th>
                <th>Extra Info</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((d, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{d.facility}</td>
                  <td>{d.distributor && d.distributor}</td>
                  {data[0].city && <td>{d.city}</td>}

                  <td>{d.helpline && d.helpline}</td>
                  <td
                    tdStyle={{ whiteSpace: "normal", wordWrap: "break-word" }}
                  >
                    {d.links && d.links}
                  </td>
                  <td>{d.extrainfo && d.extrainfo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default Region;