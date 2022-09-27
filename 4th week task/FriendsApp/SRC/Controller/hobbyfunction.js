const hobby = require('../Model/hobbyDatabase')

const getHobby = (req, res)=>{
res.send(hobby)
}

const addHobby =(req, res)=>{
const newHobby = req.body
hobby.push(newHobby)
res.send(newHobby)
}

const getOneHobby =(req, res)=>{
const id = req.params.id
const singleHobby = hobby.filter((item) => item.id === id )
res.send(singleHobby)
}

const updatehobby = (req, res)=>{
    const hobbyPayload = req.body
    const id = req.params.id
    const updateOneHobby = hobby.find((hobby) => hobby.id === id)
    hobbyPayload.name = updateOneHobby.name
    res.send(updateOneHobby)
}

const searchHobby =(req, res)=>{
const {q} = req.query
const result = hobby.find((hobby) => hobby.includes(q))
res.send(result)
}


const deleteHobby = (req, res) =>{
    const id = req.params.hobbyId
    const deleteOneHobby = hobby.filter((hobby) => hobby.id !== Number(id))
    res.send(deleteOneHobby)
}

module.exports ={
    getHobby,
    getOneHobby,
    addHobby,
    updatehobby,
    deleteHobby,
    searchHobby,
}