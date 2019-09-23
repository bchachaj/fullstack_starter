import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} from "graphql";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType', 
    fields: {
        me: {
            type: GraphQLString,
            resolve() {
                return "hello world"
            }
        }
    }
});


const Schema = new GraphQLSchema({ query: RootQuery });

export default Schema;