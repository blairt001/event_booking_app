const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema} = require('graphql');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

const app = express();
const events = [];

app.use(bodyParser.json());

app.use('/graphql',
 graphqlHttp({
    schema: buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        type RootQuery {
            events: [Event!]!

        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }

        schema {
             query: RootQuery
             mutation: RootMutation
        }
        
   `),
   // bundles up all our resolvers
    rootValue: {
        events: () => {
            // return ['I Love Dancing', 'Travelling', 'Watching Football'];
            return event;
        },
        createEvent: (args) => {
            // const eventName = args.name;
            // return eventName;
            const event = {
                _id: Math.random().toString(),
                title:args.eventInput.title,
                description: args.eventInput.description,
                price: +args.eventInput.price,
               //  date: new Date().toISOString()
               date: args.eventInput.date
            }
            events.push(event);
            return event;
        }
    },
    graphiql: true,
})
);

// I have decided to use mongoose although MongoClient is the new recommended way , it is commented below
// use backtick for creating a template literal to be able to dynamically change your username and password
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-qdpxb.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
.then(() => app.listen(4000)).catch(err => {
    console.log(err);
});

// MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-qdpxb.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
// .then(() => app.listen(4000)).catch(err => {
//     console.log(err);
// }) 

// app.get('/', (req, res, next) => {
//     res.send('Hello Tony');
// })
// app.listen(4000);

 
