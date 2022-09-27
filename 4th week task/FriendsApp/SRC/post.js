const console = require('console')
const https = require('https')
// var querystring = require('querystring')

const postData = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
})

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    port: 443,
    method: 'POST',
    headers: {'content-type' : 'application/x-www-form-urlencoded'}
  }



const  req = https.request(options, (res) => {
  let str = ''

  res.on('data',  (chunk) => {
     str += chunk


  })

  res.on('end',  ()=> {
    // Do stuff (if you want)
    console.log(str)
    console.log('working')
    // console.log(postData)
  })
})
.on('error', (err)=>{
    console.log(err)
})

req.write(postData)
req.end()