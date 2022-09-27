// const list = https.get('https://jsonplaceholder.typicode.com/posts')


// console.log(http)
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', (res)=>{
  let data = ''
  res.on('data', (chunk)=>{
    data+=chunk
  })

  res.on('end' , ()=>{
    console.log(data)
  })
})
.on('error', (error)=>{
  console.log(error)
})