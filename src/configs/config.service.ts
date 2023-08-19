import {TypeOrmModuleOptions} from '@nestjs/typeorm';

class ConfigService{
    constructor(){}

    public getTypeOrmConfig(): TypeOrmModuleOptions{
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Hello.12',
            database: 'ecommorce',
            charset: 'utf8mb4',
            entities: ['src/*entity{.ts,.js}'],
            synchronize: false,
            autoLoadEntities: true,
            migrationsTableName: 'migrations',
            migrations:['dist/database/migrations/*.ts'],
            cli: {
                migrationsDir: 'database/migrations'
            }
        }
    }
}

const configService = new ConfigService;
export {configService};