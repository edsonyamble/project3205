const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')))
let accounts = JSON.parse(fs.readFileSync('./database/db.json'))
// 	(error, data) => {
// 		if (error) {
// 			console.log(error)
// 			return
// 		}
// 		console.log(JSON.parse(data))
// 	}
// )

// http://localhost:3000/
app.get('/', function (request, response) {
	for (const account of accounts) {
		console.log(account)
	}
	response.sendFile(path.join(__dirname + '/login.html'))
})

// http://localhost:3000/auth
app.post('/auth', function (request, response, next) {
	console.log('auth working')
	let password = request.body.password
	let email = request.body.email
	console.log(password, email)
	for (const account of accounts) {
		if (email == account.email && password == account.number) {
			console.log('verification true')
			console.log(account)
			response.writeHead(200, { 'Content-Type': 'application/json' })
			response.write(JSON.stringify(account))
		}
	}
	response.end()
})

const server = app.listen(3500)

server.setTimeout(5000)
