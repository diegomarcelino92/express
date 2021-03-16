import { Router } from 'express';

import AddressController from '@controllers/AddressesController';

const router = Router();

router.get('/address/:cep', AddressController.index);

export default router;
