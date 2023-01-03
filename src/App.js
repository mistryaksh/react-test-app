import React, { useState } from 'react';
import './App.css';
import { PostingRequestAxios } from './utils';

function App() {
  const [kioskId, setKioskId] = useState('')
  const [data, setData] = useState()
  const [phone, setPhone] = useState('')
  const [pin, setPin] = useState('')
  const xhr = new XMLHttpRequest()

  const handleGetData = async () => {
    xhr.open('GET', `http://swayamhealth.info/api/category/gettestfromkiosk/${kioskId}`)
    // send the request
    xhr.send()
    xhr.addEventListener('load', async () => {
      const data = JSON.parse(xhr.responseText)
      // update the state of the component with the result here
      console.log(data.data.result)
    })
  }

  const handlePostRequest = async () => {
    setData(await PostingRequestAxios(phone, pin)
    )
    console.log('POST_DATA', data)
    setPhone('')
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
            <input placeholder='Kiosk ID' type="kioskId" name="kioskId" value={kioskId} onChange={e => setKioskId(e.target.value)} />
            <button type="submit" >Call get request</button>
          </form>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", width: "100%" }}>
          <form onSubmit={e => {
            e.preventDefault()
            handlePostRequest(phone, pin)
          }}>
            <input placeholder='Phone' type="number" name="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
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
