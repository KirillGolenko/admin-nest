import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/mongoose';
import { Model } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminUser } from './mongoose-schemas/schemas/adminUser.schema';
import { MongooseSchemasModule } from './mongoose-schemas/mongoose-schemas.module';
import { AdminModule } from '@adminjs/nestjs';
import { User } from './mongoose-schemas/schemas/user.schema';
import { Log } from './mongoose-schemas/schemas/log.schema';
import { Mapper } from './mongoose-schemas/schemas/mapper.schema';
import { ImporterConfig } from './mongoose-schemas/schemas/importerConfig.schema';
require('dotenv').config();

AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL_ONE, {
      connectionName: 'test',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL_TWO, {
      connectionName: 'prod',
    }),
    AdminModule.createAdminAsync({
      imports: [MongooseSchemasModule],
      inject: [
        getModelToken(User.name),
        getModelToken(AdminUser.name),
        getModelToken(Log.name),
        getModelToken(Mapper.name),
        getModelToken(ImporterConfig.name),
      ],
      useFactory: (
        userModel: Model<User>,
        adminModel: Model<AdminUser>,
        logModel: Model<Log>,
        mapperModel: Model<Mapper>,
        importerConfigModel: Model<ImporterConfig>,
      ) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            { resource: userModel },
            {
              resource: adminModel,
              options: { properties: { breed: { type: 'mixed' } } },
            },
            { resource: logModel },
            {
              resource: mapperModel,
              options: {
                properties: {
                  dataMapper: { type: 'mixed' },
                  'dataMapper.name': { type: 'string' },
                  'dataMapper.AccountExternalId': { type: 'string' },
                  'dataMapper.SupernovaId': { type: 'string' },
                  'dataMapper.cf_Plan': { type: 'string' },
                  'dataMapper.cf_OfHotelsInHc': { type: 'string' },
                },
              },
            },
            {
              resource: importerConfigModel,
              options: {
                properties: {
                  config: { type: 'mixed' },
                  'config.email': { type: 'richtext' },
                },
              },
            },
          ],
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
