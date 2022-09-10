const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require("dotenv").config();

app.use(cors({ origin: 'https://aiomaxbank.netlify.app'}))
app.use(express.json())

mongoose.connect('mongodb+srv://davibentim:aiomaxbank@cluster0.xpfnvyo.mongodb.net/UserInfo?retryWrites=true&w=majority')




app.get("/showall", (req, res) => {
	User.find({}, (err, result) => {
	  if (err) {
		res.json(err);
	  } else {
		res.json(result);
	  }
	});
  });



app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			surname: req.body.surname,
			email: req.body.email,
			password: newPassword,
			balance: 0,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

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




.get('/hello', (req, res) => {
	res.status(200).json({greeting: 'hello from node'})
})




app.listen(process.env.PORT || 3000)
