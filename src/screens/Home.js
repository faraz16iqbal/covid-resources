import React from "react";
import { Jumbotron, Form, Container, Alert } from "react-bootstrap";

const Home = ({ history }) => {
  const onSelect = (e) => {
    console.log(e.target.value);
    history.push(e.target.value.toLowerCase());
  };
  return (
    <>
      <Jumbotron className="text-center">
        <h1>COVID-19 Resources</h1>
        <h3> This is a list of exhaustible list of resources for Covid-19.</h3>
      </Jumbotron>
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Region</Form.Label>
            <Form.Control as="select" custom onChange={onSelect}>
              <option></option>
              <option value="delhi">Delhi NCR</option>
              <option>Maharashtra</option>
              <option value="up">Uttar Pradesh</option>
              <option>Punjab</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Alert variant="danger">
          <h5>
            <a href="https://coronabeds.jantasamvad.org/beds.html">
              Delhi Govt's Website for Bed Availability
            </a>
          </h5>
        </Alert>
        <Alert variant="success">
          <h5>
            <a href="https://www.google.com/maps/d/viewer?mid=1yxvXy78wkNoYdtKHYDCPu0lcFfgqB0yq&shorturl=1&ll=28.656388086331848%2C77.13615215305117&z=12">
              Resources available near you (Delhi)
            </a>
          </h5>
        </Alert>
        <Alert variant="primary">
          <h5>Plasma Donation Resources :</h5>
          <ul>
            <li>
              <a href="https://www.dhoondh.com/">https://www.dhoondh.com/</a>
            </li>
            <li>
              <a href="https://plasmadonor.in">https://plasmadonor.in</a>
            </li>
            <li>
              <a href="https://needplasma.in">https://needplasma.in</a>
            </li>
            <li>
              <a href="https://plasmaline.in">https://plasmaline.in</a>
            </li>
            <li>
              <a href="https://delhifightscorona.in/requestplasma/">
                https://delhifightscorona.in/requestplasma/
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/plasmadonors.delhi/">
                https://www.instagram.com/plasmadonors.delhi/
              </a>
            </li>
          </ul>
        </Alert>
        <Alert variant="secondary">
          <h5>List of Vaccine Distributors and Suppliers</h5>
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1_xyOp8IW1m7LVtDNnU8LmgyQAuTiv8jO/view?usp=sharing">
                Remdisivir Distributors List
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1DCUHWRUz-Zss2P93bSby2T4uyZWJTr69/view?usp=sharing">
                Tocilizumab Distributor List
              </a>
            </li>
          </ul>
        </Alert>
      </Container>
    </>
  );
};

export default Home;
