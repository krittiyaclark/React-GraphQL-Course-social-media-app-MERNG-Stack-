const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const User = require('../../models/User')

module.exports = {
	Mutation: {
		async register(
			_,
			{ registerInput: { username, password, confirmPassword, email } },
			context,
			info
		) {
			password = await bcrypt.hash(password, 12)

			const newUser = new User({
				username,
				password,
				email,
				createdAt: new Date().toISOString(),
			})

			const res = await newUser.save()
		},
	},
}
