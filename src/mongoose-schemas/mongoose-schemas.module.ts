import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminUserSchema } from 'src/mongoose-schemas/entities/adminUser.entity';
import { UserSchema } from 'src/mongoose-schemas/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminUserSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
