import axios from "axios"

const HeaderOptions = {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTION',
     'content-type': "application/json"
}

const GettingRequestAxios = async (kioskData) => {
     try {
          const getRequest = await axios.get(`http://swayamhealth.info/api/category/gettestfromkiosk/${kioskData}`, {
               withCredentials: true,
               headers: HeaderOptions,
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
          const postRequest = await axios.post(`http://swayamhealth.info/api/organisation/orglogin`, {
               email: emailData,
               password: pinData
          },
               {
                    withCredentials: true,
                    headers: {
                         'Access-Control-Allow-Origin': '*',
                         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
                    }
               })
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