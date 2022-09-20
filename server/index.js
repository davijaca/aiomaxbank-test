const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://davibentim:aiomaxbank@cluster0.xpfnvyo.mongodb.net/UserInfo?retryWrites=true&w=majority')


// update balance of all users

app.put('/api/showall', async (req, res) => {
	const { balance } = req.body
	const users = await User.find()
	users.forEach(async (user) => {
		await User.updateOne({ _id: user._id }, { $set: { balance: balance } })
	})
	res.json({ status: 'ok' })
})

// update balance of a specific user by email

app.post('/api/showall/:email', async (req, res) => {
	const { balance } = req.body
	const { email } = req.params
	await User.updateOne({ email: email }, { $set: { balance: balance } })
	res.json({ status: 'ok' })
})

// find a user name by email

app.get('/api/showall/:email', async (req, res) => {
	const { email } = req.params
	const user = await User.findOne({ email: email })
	res.json({ name: user.name })
})


// create a transfer of balance between two users

app.post('/api/transfer', async (req, res) => {
	const { from, to, amount } = req.body
	const fromUser = await User.findOne({ email: from })
	const toUser = await User.findOne({ email: to })
	if (fromUser.balance < amount) {
		res.json({ status: 'error', error: 'Insufficient funds' })
	} else {
		await User.updateOne({ email: from }, { $set: { balance: +fromUser.balance - +amount } })
		await User.updateOne({ email: to }, { $set: { balance: +toUser.balance + +amount } })
		res.json({ status: 'ok',  message: "Transfer successful" })
	}
})


// show all users


app.get("/api/showall", (req, res) => {
	User.find({}, (err, result) => {
	  if (err) {
		res.json(err);
	  } else {
		res.json(result);
	  }
	});
  });

// create a new user

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		const min = 10000000;
		const max = 99999999;
		const id = Math.floor(Math.random() * (max - min + 1)) + min;
		await User.create({
			id: id,
			name: req.body.name,
			surname: req.body.surname,
			email: req.body.email,
			password: newPassword,
			balance: 0,
		})
		res.json({ status: 'ok',  message: 'User registered' })
	} catch (err) {
		res.json({ status: 'error', error: 'Email already in use' })
	}
})


// login

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

// show balance

app.get('/api/balance', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', balance: user.balance })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


// update balance


app.post('/api/balance', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { balance: req.body.balance } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


// show user info

app.get('/api/name', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', name: user.name })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

// update user info

app.post('/api/name', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { name: req.body.name } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


// show user surname


app.get('/api/surname', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', surname: user.surname })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


// update user surname

app.post('/api/surname', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { surname: req.body.surname } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


// show user email


app.get('/api/email', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', email: user.email })
	} catch (error) {
		console.log(error)
		res.json({ status: 'ok' })
	}
})


// update user email


app.post('/api/email', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { email: req.body.email } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'ok' })
	}
})


// show user password

app.get('/api/password', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', password: user.password })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


// update user password

app.post('/api/password', async (req, res) => {
	const token = req.headers['x-access-token']

	try {const decoded = jwt.verify(token, 'secret123')
	     const email = decoded.email
		 const newPassword = await bcrypt.hash(req.body.password, 10)
		 await User.updateOne(
			{ email: email},
			{ $set: { password: newPassword } }
			)
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'ULTRA MEGA ERROR' })
	}
})


app.listen(process.env.PORT || 3000)
