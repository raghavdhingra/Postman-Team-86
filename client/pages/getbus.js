import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import { Row, Col, Spinner, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";

function Getbus({ res }) {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/getbus").then((res) => {
      // console.log('res',res)
      setData(res.data);
    });
    //.catch(err=>console.log(err))
  }, [1]);

  const show =
    data &&
    data.map((bus, index) => (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={index}>
          <Row>
            <Col sm="2">{bus.busNumber}</Col>
            <Col sm="10">
              <p className="text-info">
                {bus.busStations[0]} <SettingsEthernetIcon />{" "}
                {bus.busStations[bus.busStations.length - 1]}
              </p>
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>
            <ul>
              {bus.busStations.map((station, key) => (
                <li key={key}>&nbsp;{station}</li>
              ))}
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ));
  {
    /* <Jumbotron className="mt-3" key={index}>

        <h3 className="text-info text-center display-4"> </h3> 
       
    </Jumbotron> */
  }
  //  console.log(show)
  return (
    <Layout>
      <Row>
        <Col sm="12">
          <h1 className="display-4 text-center text-dark">All buses</h1>
        </Col>
        <Col xs="10" sm="8" className="m-auto">
          <Accordion className="text-center">
            {show.length === 0 ? <Spinner animation="grow" /> : show}
          </Accordion>
        </Col>
      </Row>
    </Layout>
  );
}

export default Getbus;
