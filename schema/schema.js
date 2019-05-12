// const graphql = require('graphql');
// const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

// const _ = require('loadash');


// //schema defines the object types and relation b/w object types
// //so the graph will have vehicles and car-manufacturers as object types

// //dummy data
// const vehicles = [
//     {name: 'Jeep Compass', type: 'SUV', id: '1'},
//     {name: 'Mercedes-Benz A-Class', type: 'Hatchback', id: '2'},
//     {name: 'Mercedes S class', type: 'Sedan', id: '3'}
// ];

// const VehicleType = new GraphQLObjectType({
//     name: 'Vehicle', //name of the object type
//     fields: () => ({ //use function as will have multiple types
//         id: {type: GraphQLString},
//         name: {type: GraphQLString},
//         type: {type: GraphQLString}
//     })
// });


// const RootQuery = new GraphQLObjectType({ //how we can jump into graph
//     name: 'RootQueryType',
//     fields: {
//         /* name of the query used
//          when requested from graphiql */
//         vehicle: {
//             type: VehicleType,
//             args: {id: {type: GraphQLString}},
//             resolve(parent, args) {
//                 /*this is where we can place our code
//                  get data from db or APIs in real scenerio*/
//                 return _.find(vehicles, {id: args.id});
//             }
//         }
//     }
// });

// /*query for vehicle
//     vehicle(id:"2") {
//         name,
//         type
//     }
//  */


// module.exports = new GraphQLSchema({
//     query: RootQuery
// });