const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')
// const argon2 = require('argon2')

const User = require('../models/User')

//@route GET api/auth
//@description check user is login
// nơi nào có access token thì có thể login
router.get('/', verifyToken, async (req, res) => {
	try {
		const user = await User.findById(req.userId).select('-password')
		if (!user) return res.status(400).json({ success: false, message: "User not found" })
		res.json({ success: true, user })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error'
		})
	}
})

// @route POST api/auth/register
router.post('/register', async (req, res) => {
	const {
		username,
		password,
		gmail,
	} = req.body

	// Simple validation
	if (!username || !password || !gmail)
		return res
			.status(400)
			.json({
				success: false,
				message: 'Missing username or password'
			})

	try {
		const user = await User.findOne({
			username
		})

		if (user)
			return res
				.status(400)
				.json({
					success: false,
					message: 'Username already taken'
				})

		const newUser = new User({
			username,
			password,
			gmail
		})
		await newUser.save()

		const accessToken = jwt.sign({
			userId: newUser._id
		},
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'User created successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error'
		})
	}
})

// @route POST api/auth/login
router.post('/login', async (req, res) => {
	const {
		username,
		password
	} = req.body

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({
				success: false,
				message: 'Missing username or password'
			})
	try {
		//check user
		const user = await User.findOne({
			username
		})
		if (!user)
			return res.status(400).json({
				success: false,
				message: 'Incorrect username or password'
			})
		if (user.password != password)
			return res.status(400).json({
				success: false,
				message: 'Incorrect username or password'
			})
		const accessToken = jwt.sign({
			userId: user._id
		},
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'Login successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: 'Internal server error'
		})
	}
})

module.exports = router