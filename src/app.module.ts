import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/mongoose';
import { Model } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminUser } from './mongoose-schemas/entities/adminUser.entity';
import { MongooseSchemasModule } from './mongoose-schemas/mongoose-schemas.module';
import { AdminModule } from '@adminjs/nestjs';
import { User } from './mongoose-schemas/entities/user.entity';

AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.l8ufw.mongodb.net/myFirstDatabase',
    ),
    AdminModule.createAdminAsync({
      imports: [MongooseSchemasModule],
      inject: [getModelToken('User'), getModelToken('Admin')],
      useFactory: (userModel: Model<User>, adminModel: Model<AdminUser>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [{ resource: userModel }, { resource: adminModel }],
          branding: {
            logo:
              'https://churnzero.net/wp-content/uploads/2017/08/ChurnZero-Logo-Dark-on-Light-Stacked-LARGE.png',
            companyName: 'ChurnZero',
            theme: {
              colors: {
                hoverBg: '#7a7a7a',
              },
            },
          },
        },
      }),
    }),
    MongooseSchemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
