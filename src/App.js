import React, { } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const GettingRequest = async () => {
    try {
      const getRequest = await axios.get(`http://swayamhealth.info/api/category/gettestfromkiosk/MUMSAN2`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      })
      console.log("GET DATA", getRequest.data.data.result)
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message)
      }
      console.log(err.message)
    }
  }
  const PostingRequest = async () => {
    try {
      const postRequest = await axios.post(`http://swayamhealth.info/api/organisation/orglogin`, {
        email: "mylabs@gmail.com",
        password: "mylabs"
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      })
      console.log("POST DATA", postRequest.data.data.org)
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message)
      }
      console.log(err.message)
    }
  }
  return (
    <div className="App">
      <h1>Hello world! Click button for calling request</h1>
      <div style={{
        display: "flex", gap: 5
      }}>
        <button type="button" onClick={GettingRequest}>Call get request</button>
        <button type="button" onClick={PostingRequest}>Call post request</button>
      </div>
    </div>
  );
}

export default App;
