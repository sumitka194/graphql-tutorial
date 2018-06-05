import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './source/schema';
import root from './source/resolver';
import { authMiddleware } from './source/util/helper';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(authMiddleware);

app.use('/api', graphqlHTTP(request => ({
  schema,
  context: {
    request,
  },
  rootValue: root,
  graphiql: true,
})));

app.listen(4040, () => {
  console.log('#####################################');
  console.log('### App is listening on port 4040 ###');
  console.log('#####################################');
});
