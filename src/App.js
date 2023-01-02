import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [kioskId, setKioskId] = useState('')
  const [data, setData] = useState()
  const [email, setEmail] = useState('')
  const [pin, setPin] = useState('')


  const GettingRequest = async (kioskData) => {
    try {
      console.log(kioskData.kioskData)
      const getRequest = await axios.get(`http://swayamhealth.info/api/category/gettestfromkiosk/${kioskData.kioskData}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTION',
        }
      })
      console.log(kioskData)
      setData(getRequest.data.result)
      console.log("GET DATA", data)
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message)
      }
      console.log(err.message)
    }
  }
  const PostingRequest = async (emailData, pinData) => {
    try {
      const postRequest = await axios.post(`http://swayamhealth.info/api/organisation/orglogin`, {
        email: emailData,
        password: pinData
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
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

  const handleGetData = () => {
    GettingRequest({ kioskData: kioskId })
  }
  const handlePostRequest = () => {
    PostingRequest(email, pin)
  }

  return (
    <div className="App">
      <h1>Hello world! Click button for calling request</h1>
      <div style={{
        display: "flex", gap: 5,
        flexDirection: "column"
      }}>
        <div>

          <form onSubmit={(e) => {
            e.preventDefault()
            handleGetData()
          }}>
            <input type="kioskId" name="kioskId" value={kioskId} onChange={e => setKioskId(e.target.value)} />
            <button type="submit" >Call get request</button>
          </form>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", width: "100%" }}>
          <form onSubmit={e => {
            e.preventDefault()
            handlePostRequest(email, pin)
          }}>
            <input placeholder='Email' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input placeholder='Your pin' type="password" name="pin" value={pin} onChange={(e) => setPin(e.target.value)} />
            <br />
            <button type="submit">Call post request</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
