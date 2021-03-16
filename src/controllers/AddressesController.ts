import Address from '@models/Address';

import { Response, Request } from 'express';

class AddressController {
  index(request: Request, response: Response) {
    const any = new Address();

    response.json({ message: 'Any Message' });
  }
}

export default new AddressController();
