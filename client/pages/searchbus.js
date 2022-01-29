import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Jumbotron, Spinner } from "react-bootstrap";
import HEAD from "next/head";

function searchbus() {
  const [busno, setBusno] = useState("");
  const [data, setData] = useState([]);
  const [busdata, setBusdata] = useState([]);
  const [clicked, setClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true);
    //  console.log('submit pressed')

    let body = {
      busNumber: busno,
    };

    axios.post("http://localhost:4000/getbus", body).then((res) => {
      //  console.log(res)
      setClick(false);
      setBusdata(res.data);
    });
    //  .catch(err=>console.log(err))
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/searchbus")
      .then((result) => setData(result.data));
    //.catch(err=>console.log(err))
  }, [1]);

  const datalist = data.map((number, index) => (
    <option key={index} value={number.busNumber}>
      {number.busNumber}
    </option>
  ));

  return (
    <Layout>
      <HEAD>
        <title>DTC{busno.length > 0 ? "-" + busno : ""}</title>
      </HEAD>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          list={(busno + "").length >= 1 ? "data" : ""}
          value={busno}
          onChange={(e) => setBusno(e.target.value)}
          placeholder="Enter bus number"
        />
        <datalist id="data">{datalist}</datalist>
        <button className="btn btn-info d-block mx-auto mt-2" type="submit">
          Submit
        </button>
      </form>
      {busdata.length !== 0 ? (
        <div>
          <h3 className="text text-success text-center mt-2">Bus stations</h3>
          <Jumbotron>
            {busdata[0] &&
              busdata[0].busStations.map((station, index) => (
                <li key={index}>{station}</li>
              ))}
          </Jumbotron>
        </div>
      ) : (
        clicked && <Spinner animation="grow" className="d-block mx-auto mt-4" />
      )}
    </Layout>
  );
}

export default searchbus;
