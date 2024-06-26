import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {gql} from 'graphql-tag'
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { getUser } from './modules/auth.js';
import express from 'express';
import db from '../prisma/db.js';
import cors from 'cors';
import { DataSourceContext } from './context.js';
import { createServer } from 'http';
import bodyParser from 'body-parser';
const { json } = bodyParser;


const app = express();
const httpServer = createServer(app);

const server = new ApolloServer<DataSourceContext>({
  typeDefs,
  resolvers,
});
   
await server.start();
app.use(
  cors<cors.CorsRequest>({
    origin: ['http://localhost:5000', 'http://localhost:5173'],
    credentials: true,
  }),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      console.log(req.headers.authorization)
      const authorization = req.headers.authorization;
      const user = authorization ? getUser(authorization) : null;
      
      if (user) {
        console.log("user logged");
      }
      return {
        dataSources: {
          db,
        },
        user,
      };
    },
  }),
);

// Start the HTTP server
await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀  Server ready at: http://localhost:4000`);