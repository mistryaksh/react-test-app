 # const xhr = new XMLHttpRequest()
     xhr.open('GET', `http://swayamhealth.info/api/category/gettestfromkiosk/${kioskId}`)

      <!-- send the request -->
# xhr.send()
#     xhr.addEventListener('load', async () => {
          const data = JSON.parse(xhr.responseText)

          <!-- update the state of the component with the result here -->
          console.log(data.data.result)
#     })
# }