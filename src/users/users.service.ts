import { Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');
import { UserRoles } from './entities/user-roles.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        @InjectRepository(UserRoles)
        private readonly userRolesRepository: Repository<UserRoles>
    ) {

    }

    async register(data): Promise<any> {
        let user = new Users();
        user.username = data.username;
        let obj = { username: data.username, role: data.role };
        user.password = bcrypt.hash(obj, 10);
        user.role = data.role;

        let userDetails = await this.usersRepository.save(user);
        await this.registerRoleForUser(userDetails.id, data.role_id);

        return userDetails;
    }

    async findByUsername(username) {
        return await this.usersRepository
            .createQueryBuilder("user")
            .where("user.username = :username", { username: username })
            .getOne();
    }

    async registerRoleForUser(userId, roleId): Promise<any> {
        let userRole = new UserRoles();
        userRole.user_id = userId;
        userRole.role_id = roleId;

        return await this.userRolesRepository.save(userRole);
    }

    async valiDateUser(recivedPassword, actualPassword): Promise<Boolean> {
        let decoded = await bcrypt.compare(recivedPassword, actualPassword);
        if (decoded) {
            return true;
        }
        return false
    }
}
