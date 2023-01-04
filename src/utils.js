import axios from "axios"

const HeaderOptions = {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
     'Access-Control-Allow-Headers': '*'
}

const BackendUrl = `http://swayamhealth.info/api`

const GettingRequestAxios = async (kioskData) => {
     try {
          console.log(HeaderOptions)
          const getRequest = await axios.get(`${BackendUrl}/category/gettestfromkiosk/${kioskData}`, {
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
          const postRequest = await axios.post(`${BackendUrl}/organisation/orglogin`, {
               email: emailData,
               password: pinData
          },
               {
                    withCredentials: true,
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