// console.log(http)

const https = require('https');
console.log(https)
https.request('https://jsonplaceholder.typicode.com/posts/1', (res)=>{
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




// const list = https.get('https://jsonplaceholder.typicode.com/posts')





// console


// const list = https.get('https://jsonplaceholder.typicode.com/posts')

