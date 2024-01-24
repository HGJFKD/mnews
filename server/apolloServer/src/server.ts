import express from 'express';
import cors from "cors";
import morgan from "morgan";

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerErrorCode } from '@apollo/server/errors';

import http from 'http';
import { config } from 'dotenv';

import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import bodyParser from 'body-parser';

import { resolvers } from './schemas gql/resolves.js';

import { connectToPg } from './configs/connectToPg.js';
import { typeDefs } from './schemas gql/schema.js';
// import ordersRoutes from './routes/ordersRoutes.js';

config()
const app = express();

const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors<cors.CorsRequest>());
app.use(morgan('dev'));

const schema = makeExecutableSchema({ typeDefs, resolvers });

const port = process.env.SERVER_PORT || 4000;

const server = new ApolloServer({
    schema,

    formatError: (formattedError, error) => {
        if (
            formattedError.extensions?.code ===
            ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
        ) {
            return {
                ...formattedError,
                message: "Your query doesn't match the schema. Try double-checking it!",
            };
        }
        return formattedError;
    },

    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),

        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await wsServerCleanup.dispose();
                    },
                };
            },
        },

    ],
});

const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/mns",
});

const wsServerCleanup = useServer({ schema }, wsServer);


server.start().then(async () => {

    await connectToPg();    
    // app.use("/orders", ordersRoutes)
    app.use(
        '/mns',
        bodyParser.json(),
        expressMiddleware(server)
    );

    httpServer.listen({ port });
    console.log(`🚀 Server ready at: ${port}/mns`)
    console.log(
        `🚀 Subscription endpoint ready at ws://host:${port}/subscriptions`
    )
});