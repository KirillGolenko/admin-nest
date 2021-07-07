import { INestApplication } from '@nestjs/common';
import { Database, Resource } from 'admin-bro-typeorm';
import * as AdminBroMongoose from '@admin-bro/mongoose';
import AdminBro from 'admin-bro';
import mongoose from 'mongoose';
import * as AdminBroExpress from 'admin-bro-expressjs';
import UserResource from './resources/user.resource';

export const setupAdminPanel = async (app: INestApplication): Promise<void> => {
  AdminBro.registerAdapter(AdminBroMongoose);
  AdminBro.registerAdapter({ Database, Resource });

  const mongooseDb = await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
  });

  const adminBro = new AdminBro({
    databases: [mongooseDb],
    resources: [UserResource],
    rootPath: '/admin',
  });

  const router = AdminBroExpress.buildRouter(adminBro);
  app.use(adminBro.options.rootPath, router);
};
