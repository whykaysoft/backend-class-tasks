const express = require('express')
const app = express()
const {
    getHobby,
    getOneHobby,
    addHobby,
    updatehobby,
    deleteHobby,
    searchHobby,
} = require('../Controller/hobbyfunctions')

const router = express.Router()

router.get('/', getHobby)
router.get('/:hobbyId', getOneHobby)
router.post('/', addHobby)
router.put('/:hobbyId', updatehobby)
router.delete('/:hobbyId', deleteHobby)
router.get('/search', searchHobby)


module.exports = router