const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
// Connect to Mongoose
const mongoose = require('mongoose')

const { MONGODB } = require('./config.js')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

mongoose
	.connect(MONGODB, { useNewUrlParser: true })
	.then(() => {
		console.log(`Mongodb connected`)
		return server.listen({ port: 5000 })
	})
	.then((res) => {
		console.log(`Server running at ${res.url}`)
	})
