import express from 'express'
import graphqlHTTP from 'express-graphql'

import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import helmet from 'helmet'

const app = express();
import Schema from "./schema";

app.use(helmet());
// app.use(cors("*"));

if(process.env.NODE_ENV === "development") {
    app.use(morgan("combined"))
}

// app.get("*", (res, req) => {
//     res.send('hit route')
// })

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

const port = process.env.PORT || 8080; 

app.listen(port, () => console.log(`server listening on port ${port}`))

