import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Row, Col, Jumbotron } from 'react-bootstrap';

function Registerbus() {
  const [busno, setBusno] = useState('');
  const [data, setData] = useState([]);
  const [station, setStation] = useState('');
  const [sarr, setSarr] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submitting data')
    let data = {
      busNumber: busno,
      busStations: sarr,
    };
    axios.post('http://localhost:4000/registerbus', data).then((res) => {
      // console.log(res)
      setSarr(JSON.stringify(res.data));
      setBusno('');
    });
    //  .catch(err=>console.log(err))
  };
  useEffect(() => {
    axios
      .get('http://localhost:4000/searchbus')
      .then((result) => setData(result.data));
    //.catch(err=>console.log(err))
  }, []);

  const datalist = data.map((number, index) => (
    <option key={index} value={number.busNumber}>
      {number.busNumber}
    </option>
  ));

  return (
    <Layout>
      <h2>Register bus</h2>
      <Row>
        <Col sm='12'>
          <form>
            <fieldset>
              <div className='form-group row'>
                <label htmlFor='staticEmail' className='col-2 col-form-label'>
                  Bus NO
                </label>
                <div className='col-10'>
                  <input
                    type='text'
                    value={busno}
                    list={(busno + '').length >= 1 ? 'data' : ''}
                    onChange={(e) => setBusno(e.target.value)}
                    placeholder='Bus Number'
                    className='form-control'
                  />
                  <datalist id='data'>{datalist}</datalist>
                </div>
              </div>
            </fieldset>

            {/* <div className="form-group">
                <label htmlFor="station">Email address</label>
                <input type="text" value={station} onChange={(e)=>setStation(e.target.value)} placeholder="Station Name" className="form-control"  aria-describedby="emailHelp" />    
            </div> */}

            {/* <button type="submit" className="btn btn-info" onClick={handleAdd}>Add</button>   */}
            <Row>
              <Col xs='6'>
                <button
                  type='submit'
                  className='btn btn-success float-right'
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </Col>
              <Col xs='6'>
                <Link href='/getbus'>
                  <button className='btn btn-warning'>Get Bus</button>
                </Link>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col sm='12'>
          {sarr && <Jumbotron className='overflow-auto'>{sarr}</Jumbotron>}
        </Col>
      </Row>
    </Layout>
  );
}

export default Registerbus;
