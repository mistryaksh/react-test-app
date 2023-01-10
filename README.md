  const xhr = new XMLHttpRequest()
     xhr.open('GET', `http://swayamhealth.info/api/category/gettestfromkiosk/${kioskId}`)

      <!-- send the request -->
 xhr.send()
     xhr.addEventListener('load', async () => {
          const data = JSON.parse(xhr.responseText)

          <!-- update the state of the component with the result here -->
          console.log(data.data.result)
     })
 }

# cors middleware for backend 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})
