import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { Row, Col, Spinner } from 'react-bootstrap';
import HEAD from 'next/head';

function Searchstations() {
  const [station, setStation] = useState('');
  const [data, setData] = useState([]);
  const [busdata, setBusdata] = useState([]);
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/searchstations').then((result) => {
      //  console.log(result)
      setData(result.data.result);
    });
    // .catch(err=>console.log(err))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit pressed')
    setClick(true);
    let body = {
      busStation: station,
    };

    axios.post('http://localhost:4000/searchstations', body).then((res) => {
      //console.log(res)
      setBusdata(res.data.result);
      setClick(false);
      setStation('');
    });
  };

  const datalist = data.map((name, index) => (
    <option key={index} value={name}>
      {name}
    </option>
  ));

  return (
    <Layout>
      <HEAD>
        <title>DTC{station.length > 0 ? '-' + station : ''}</title>
      </HEAD>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          list={station.length >= 1 ? 'data' : ''}
          value={station}
          onChange={(e) => setStation(e.target.value)}
          placeholder='Enter Station'
        />
        <datalist id='data'>{datalist}</datalist>
        <button className='btn btn-info d-block mx-auto mt-2' type='submit'>
          Submit
        </button>
      </form>

      {busdata.length > 0 ? (
        <div>
          <h3 className='text text-success text-center mt-2'>Bus Number</h3>
          <Row className='justify-content-center'>
            <Col sm='8' xs='12' className='text-center'>
              {busdata.map((station, index) => (
                <li className='text-info' key={index}>
                  {station.busNumber}
                </li>
              ))}
            </Col>
          </Row>
        </div>
      ) : (
        clicked && <Spinner animation='grow' className='d-block mx-auto mt-4' />
      )}
    </Layout>
  );
}

export default Searchstations;
