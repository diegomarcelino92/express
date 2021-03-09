import express from 'express';

import AnyController from '@controllers/AnyController';

const app = express();

app.get('/', AnyController.anyMethod);

app.listen(3001);
