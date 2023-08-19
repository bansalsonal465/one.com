import { Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor() { }
    private saltRound = 10;
    async generateToken(username): Promise<any> {
        const hash = await bcrypt.hash(username, this.saltRound);
        return hash;
    }
}
