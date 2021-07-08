import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AdminUser,
  AdminUserSchema,
} from 'src/mongoose-schemas/schemas/adminUser.schema';
import { User, UserSchema } from 'src/mongoose-schemas/schemas/user.schema';
import {
  ImporterConfig,
  ImporterConfigSchema,
} from './schemas/importerConfig.schema';
import { Log, LogSchema } from './schemas/log.schema';
import { Mapper, MapperSchema } from './schemas/mapper.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: AdminUser.name, schema: AdminUserSchema },
        { name: User.name, schema: UserSchema },
      ],
      'test',
    ),
    MongooseModule.forFeature(
      [
        { name: Log.name, schema: LogSchema },
        { name: Mapper.name, schema: MapperSchema },
        { name: ImporterConfig.name, schema: ImporterConfigSchema },
      ],
      'prod',
    ),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
