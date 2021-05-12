/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { Jumbotron, Form, Container, Alert } from "react-bootstrap";
// import CardComp from "../components/CardComp";

const Home = ({ history }) => {
  const onSelect = (e) => {
    history.push(`state/${e.target.value.toLowerCase()}`);
  };

  const options = [
    ["delhi", "Delhi NCR"],
    ["maharashtra", "Maharashtra"],
    ["agra", "Agra"],
    ["bihar", "Bihar"],
    ["up", "Uttar Pradesh"],
    ["westbengal", "West Bengal"],
    ["gurgaon", "Gurgaon"],
    ["karnataka", "Karnataka"],
    ["chattisgarh", "Chattisgarh"],
    ["AP", "Andhra Pradesh"],
    ["lucknow", "Lucknow"],
    ["mp", "Madhya Pradesh"],
    ["assam", "Assam"],
    ["haryana", "Haryana"],
    ["punjab", "Punjab"],
    ["jk", "Jammu and Kashmir"],
    ["rajasthan", "Rajasthan"],
    ["aligarh", "Aligarh"],
    ["gujarat", "Gujarat"],
    ["odisha", "Odisha"],
  ];

  useEffect(() => {
    options.sort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Jumbotron className="text-center">
        <h1>COVID-19 Resources</h1>
        <h3> This is a list of exhaustible resources for Covid-19.</h3>
        {/* <CardComp /> */}
      </Jumbotron>
      <Container className="main">
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Region</Form.Label>
            <Form.Control as="select" custom onChange={onSelect}>
              <option value="">Select</option>
              <option value="panindia">Pan India</option>
              {options.sort().map((op, i) => {
                return (
                  <option key={i} value={op[0]}>
                    {op[1]}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form>

        <Container className="text-center pt-5">
          <h2>Other List Of Important Resources</h2>
        </Container>

        <Alert className="break" variant="warning">
          <h5>
            <a href="https://covidelhi.com/donate" target="_blank">
              FUNDRAISERS FOR COVID RELIEF (PLEASE DONATE)
            </a>
          </h5>
        </Alert>
        <Alert className="break" variant="danger">
          <h5>
            <a
              href="https://coronabeds.jantasamvad.org/beds.html"
              target="_blank"
            >
              Delhi Govt's Website for Bed Availability
            </a>
          </h5>
        </Alert>
        <Alert variant="success" className="break">
          <h5>
            <a href="https://www.google.com/maps/d/viewer?mid=1yxvXy78wkNoYdtKHYDCPu0lcFfgqB0yq&shorturl=1&ll=28.656388086331848%2C77.13615215305117&z=12">
              Resources available near you (Delhi)
            </a>
          </h5>
        </Alert>
        <Alert variant="warning" className="break">
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
        <Alert variant="secondary" className="break">
          <h5>List of Vaccine Distributors and Suppliers</h5>
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1DCUHWRUz-Zss2P93bSby2T4uyZWJTr69/view?usp=sharing">
                Tocilizumab Distributor List
              </a>
            </li>
          </ul>
        </Alert>
        <Alert variant="success" className="break">
          <h5>
            <a href="/mentalhealth">Important Mental Health Resources</a>
          </h5>
        </Alert>
      </Container>
    </>
  );
};

export default Home;
