const console = require('console')
const https = require('https')
// var querystring = require('querystring')

const postData = JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
})

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    port: 443,
    method: 'PUT',
    headers: {'content-type' : 'application/x-www-form-urlencoded'}
  }



const  req = https.request(options, (res) => {
  let str = ''

  res.on('data',  (chunk) => {
     str += chunk


  })

  res.on('end',  ()=> {
    // Do stuff (if you want)
    console.log(postData)
    console.log('working')

  })
})
.on('error', (err)=>{
    console.log(err)
})

req.write(postData)
req.end()

