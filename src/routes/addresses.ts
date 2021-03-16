import { Router } from 'express';

import AddressController from '@controllers/AddressesController';

import Redis from '@services/redis';

const router = Router();

router.use('/address/:cep', Redis.caching);
router.get('/address/:cep', AddressController.index);

export default router;
