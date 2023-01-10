import axios from "axios"

export const HeaderOptions = {
     'Access-Control-Allow-Origin': '*',
     'Content-Type': 'application/json',
}

const BackendUrl = `https://swayamhealth.info/api`

const GettingRequestAxios = async (kioskData) => {

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