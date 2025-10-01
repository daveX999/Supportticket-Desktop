const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controller/userController')

const {protect} = require('../middleware/authMiddleware')

// router.post('/', (req, res) => {
//     res.json({message: 'Testing post'})
// })

// router.post('/login', (req, res) => {
//     res.json({message: 'Login User'})
// })
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)


module.exports = router