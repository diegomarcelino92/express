import Any from '@models/Any';

import { Response, Request } from 'express'

class AnyController {
    anyMethod(request: Request, response: Response) {
        const any = new Any();

        response.json({ message: 'Any Message' })
    }
}

export default new AnyController()
