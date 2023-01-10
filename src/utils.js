import axios from "axios"

export const HeaderOptions = {
     "Access-Control-Request-Method": "GET,POST,PUT,OPTIONS,DELETE,HEAD",
     "Access-Control-Request-Headers": "Content-Type, x-requested-with",
     "Access-Control-Allow-Origin": "*",
     "Origin": "https://react-test-app-1.netlify.app"
}

const BackendUrl = `https://swayamhealth.info/api`

const GettingRequestAxios = async (kioskData) => {
     try {
          console.log(BackendUrl)
          const getRequest = await axios.get(`${BackendUrl}/category/gettestfromkiosk/${kioskData}`,
               {
                    headers: HeaderOptions
               })
          return await getRequest.data.data.result
     } catch (err) {
          if (err.response) {
               console.log(err.response.data.message)
          }
          console.log(err)
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