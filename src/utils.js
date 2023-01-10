import axios from "axios"

export const HeaderOptions = {
     'Access-Control-Allow-Origin': 'ORIGIN',
     'Access-Control-Allow-Credentials': true,
     'Access-Control-Allow-Methods': 'PUT, GET, HEAD, POST, DELETE, OPTIONS',
     'Access-Control-Allow-Headers': 'include',
     'Content-Type': 'application/json',
     "origin": "https://react-test-app-1.netlify.app/"
}

const BackendUrl = `https://swayamhealth.info/api`
// const BackendUrl = "http://43.204.35.128:5000"
const GettingRequestAxios = async (kioskData) => {

     console.log(BackendUrl)
     const getRequest = await axios.get(`${BackendUrl}/category/gettestfromkiosk/${kioskData}`, {
          withCredentials: false,
          validateStatus: () => true,
          headers: {
               'Access-Control-Allow-Origin': 'ORIGIN',
               'Access-Control-Allow-Credentials': true,
               'Access-Control-Allow-Methods': 'PUT, GET, HEAD, POST, DELETE, OPTIONS',
               'Access-Control-Allow-Headers': '*',
               // 'Content-Type': 'application/json',
               "origin": "https://react-test-app-1.netlify.app/"
          }
     })
     console.log("YOUR HEADERS", getRequest.headers)
     return await getRequest.data

}
const PostingRequestAxios = async (emailData, pinData) => {
     try {
          const postRequest = await axios.post(`${BackendUrl}/organisation/orglogin`, {
               email: emailData,
               password: pinData
          },
               {
                    headers: HeaderOptions
               })
          console.log(postRequest.data)
          return postRequest.data.data.org
     } catch (err) {
          if (err.response) {
               console.log(err.response.data.message)
          }
          console.log(err.message)
     }
}
const GettingRequestFetch = async (kioskData) => {
     const data = await fetch(`http://swayamhealth.info/api/category/gettestfromkiosk/${kioskData}`, { method: "GET" }).then(res => {
          console.log(res.json())
     }).catch(err => {
          console.log(err)
     })
     return data
}

export {
     GettingRequestAxios, PostingRequestAxios, GettingRequestFetch
}