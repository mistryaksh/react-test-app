import axios from "axios"

export const HeaderOptions = {
     "Access-Control-Allow-Origin": "https://react-test-app-1.netlify.app/"
}

const BackendUrl = `https://swayamhealth.info/api`

const GettingRequestAxios = async (kioskData) => {
     try {
          console.log(BackendUrl)
          // const getRequest = await axios.get(`${BackendUrl}/category/gettestfromkiosk/${kioskData}`,
          //      {
          //           headers: HeaderOptions
          //      })
          // return await getRequest.data.data.result
          axios.get(`${BackendUrl}/category/gettestfromkiosk/${kioskData}`) // Send get request to get CSRF token once site is visited.
               .then(res => {
                    axios.defaults.headers.post['X-XSRF-TOKEN'] = res.data; // Set it in header for the rest of the axios requests.
                    console.log("YOUR REQUESTED DATA", res.data.data)
               })
     } catch (err) {
          if (err.response) {
               console.log("SERVER ERROR", err.response.data.message)
          }
          console.log("NORMAL ERROR", err)
     }
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