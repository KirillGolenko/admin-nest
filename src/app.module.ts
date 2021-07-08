import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/mongoose';
import { Model } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminUser } from './users/entities/adminUser.entity';
import { AdminsSchemasModule } from './mongoose-schemas/admins-schemas.module';
import { AdminModule } from '@adminjs/nestjs';
import { UserSchemasModule } from './mongoose-schemas/user-schemas.module';
import { User } from './users/entities/user.entity';

AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.l8ufw.mongodb.net/myFirstDatabase',
    ),
    AdminModule.createAdminAsync({
      imports: [AdminsSchemasModule, UserSchemasModule],
      inject: [getModelToken('User'), getModelToken('Admin')],
      useFactory: (userModel: Model<User>, adminModel: Model<AdminUser>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [{ resource: userModel }, { resource: adminModel }],
        },
      }),
    }),
    AdminsSchemasModule,
    UserSchemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
