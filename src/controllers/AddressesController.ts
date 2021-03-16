import { Response, Request } from 'express';

import Address from '@models/Address';
import getAddress from '@services/viacep';
import Redis from '@services/redis';

class AddressController {
  async index(request: Request, response: Response) {
    const { cep } = request.params;

    const formattedCep = cep.replace(/\D/g, '');

    try {
      if (formattedCep.length !== 8) {
        // TODO: Criar controlador de erros
        const error = { message: 'Invalid Cep' };

        throw error;
      }

      const data = await getAddress(formattedCep);

      if (data.erro) throw data;

      const address = await Address.create(data);

      Redis.setCache(formattedCep, JSON.stringify(address));

      return response.json(address);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default new AddressController();
