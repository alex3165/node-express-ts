import * as express from 'express';

export default express.Router()
  .use('/', (req, res) => {
    res.status(200).send({ hello: 'test' });
  });
