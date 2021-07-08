// import { INestApplication } from '@nestjs/common';
// import AdminJS from 'adminjs';
// import mongoose from 'mongoose';
// import UserResource from './resources/user.resource';

// export const setupAdminPanel = async (app: INestApplication): Promise<void> => {
//   AdminJS.registerAdapter();
//   AdminJS.registerAdapter({ Database, Resource });

//   const mongooseDb = await mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//   });

//   const adminJS = new AdminJS({
//     databases: [mongooseDb],
//     resources: [UserResource],
//     rootPath: '/admin',
//   });

//   const router = AdminBroExpress.buildRouter(adminJS);
//   app.use(adminJS.options.rootPath, router);
// };
