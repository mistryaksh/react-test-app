import React, { useState } from "react";
import "./App.css";
import { GettingRequestAxios, PostingRequestAxios } from "./utils";

function App() {
     const [kioskId, setKioskId] = useState("");
     const [data, setData] = useState();
     const [phone, setPhone] = useState("");
     const [pin, setPin] = useState("");

     // Using axios request // ! GET
     const handleGetData = async () => {
          try {
               const yourData = await GettingRequestAxios(kioskId);
               console.log("GOT THE DATA", yourData);
          } catch (err) {
               if (err.response) {
                    console.log("SERVER ERROR", err.response.data.message);
               } else {
                    console.log("NORMAL ERROR", err.message);
               }
          }
     };

     // Use axios request // ! POST
     const handlePostRequest = async () => {
          const YourData = await PostingRequestAxios(phone, pin);
          setData(YourData);
          console.log("POST_DATA", data);
          setPhone("");
     };

     return (
          <div className="App">
               <h1>Hello world! Click button for calling request</h1>
               <div
                    style={{
                         display: "flex",
                         gap: 5,
                         flexDirection: "column",
                    }}
               >
                    <div>
                         <form
                              onSubmit={(e) => {
                                   e.preventDefault();
                                   handleGetData();
                              }}
                         >
                              <input
                                   placeholder="Kiosk ID"
                                   type="kioskId"
                                   name="kioskId"
                                   value={kioskId}
                                   onChange={(e) => setKioskId(e.target.value)}
                              />
                              <button type="submit">Call get request</button>
                         </form>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: "flex", width: "100%" }}>
                         <form
                              onSubmit={(e) => {
                                   e.preventDefault();
                                   handlePostRequest(phone, pin);
                              }}
                         >
                              <input
                                   placeholder="Phone"
                                   type="email"
                                   name="number"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                              />
                              <br />
                              <input
                                   placeholder="Your pin"
                                   type="password"
                                   name="pin"
                                   value={pin}
                                   onChange={(e) => setPin(e.target.value)}
                              />
                              <br />
                              <button type="submit">Call post request</button>
                         </form>
                    </div>
               </div>
          </div>
     );
}

export default App;
