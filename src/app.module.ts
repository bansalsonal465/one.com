import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService} from './configs/config.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hello.12',
      database: 'ecommerce',
      charset: 'utf8mb4',
      entities: ['src/*entity{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
      migrationsTableName: 'migrations',
      migrations:['dist/database/migrations/*.ts'],
      cli: {
          migrationsDir: 'database/migrations'
      }
  }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
