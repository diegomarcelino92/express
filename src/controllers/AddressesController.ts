import { Response, Request } from 'express';

import { onlyNumbers, toNumber } from '@formatters';
import Address from '@models/Address';
import getAddress from '@services/viacep';
import Redis from '@services/redis';

class AddressController {
  async index(request: Request, response: Response) {
    try {
      const { cep } = request.params;

      const formattedCep = onlyNumbers(cep);

      if (formattedCep.length !== 8) {
        // TODO: Criar controlador de erros
        const error = { message: 'Invalid Cep' };

        throw error;
      }

      const data = await getAddress(formattedCep);

      data.cep = formattedCep;
      data.id = toNumber(data.cep);

      if (data.erro) throw data;

      const address = await this.store(data);

      Redis.setCache(formattedCep, JSON.stringify(address));

      return response.json(address);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async store(data: Address) {
    const finded = await Address.findByPk(data.id);

    if (finded) return finded;

    const address = await Address.create(data);

    return address;
  }
}

export default new AddressController();
