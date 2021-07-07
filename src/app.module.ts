import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

import * as ormconfig from './ormconfig';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseSchemasModule } from './mongoose-schemas/mongoose-schemas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.l8ufw.mongodb.net/test',
    ),
    UsersModule,
    MongooseSchemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
