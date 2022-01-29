import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Jumbotron, Alert } from "react-bootstrap";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import Link from "next/link";

function index() {
  return (
    <Layout>
      <h1 className="text-dark text-center">
        Welcome <BubbleChartIcon />
      </h1>
      <Row className="justify-content-center">
        <Col sm="8">
          <h6 className="text-center text-info">Navigation</h6>
        </Col>
        <Col sm="8">
          <Jumbotron>
            <Row>
              <Col sm="12" className="text-center mb-3">
                <Link href="/getbus">
                  <a className="text-light p-2 bg-dark my-2">Get All Buses</a>
                </Link>
              </Col>
              <Col sm="12" className="text-center mb-3">
                <Link href="/searchbus">
                  <a className="text-light p-2 bg-dark my-2">Search Bus</a>
                </Link>
              </Col>
              <Col sm="12" className="text-center mb-3">
                <Link href="/Searchstations">
                  <a className="text-light p-2 bg-dark my-2">Search Station</a>
                </Link>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <Alert variant={"danger"} className="text-center">
            MERN DTC App by Team 86{" "}
          </Alert>
        </Col>
      </Row>
    </Layout>
  );
}

export default index;
