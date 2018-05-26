import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './source/schema';
import root from './source/resolver';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4040, () => {
  console.log('#####################################');
  console.log('### App is listening on port 4040 ###');
  console.log('#####################################');
});
