// dotenv
require('dotenv').config();

// GraphQL
const { GraphQLServer }  = require('graphql-yoga');
const { importSchema } = require('graphql-import');

// Mongoose
const { mongoose } = require('mongoose');

// process.env
mongoose.connect(process.env.MONGO_URL, {
    userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// 
const mongo = mongoose.connection;

mongo.on('error'), (error) => console.log(error);