/* eslint-disable no-undef */
// import request from 'supertest';

import Address from '@models/Address';

import connection from '@connection';

// import app from '../../src/app';

describe('Save Address', () => {
  it('Save Address on DB', async () => {
    Address.initialize(connection);

    const testAddress = {
      id: 11111111,
      bairro: 'teste',
      cep: 'teste',
      complemento: 'teste',
      ddd: 'teste',
      gia: 'teste',
      ibge: 'teste',
      localidade: 'teste',
      logradouro: 'teste',
      siafi: 'teste',
      uf: 'teste',
    };

    const address = await Address.create(testAddress);

    // SUPER TEST EXAMPLE

    // const response = await request(app).post('/address').send(testAddress);

    // expect(response.status).toBe(200);

    expect(address.bairro).toBe('teste');
  });
});
