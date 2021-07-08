import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminUserSchema } from 'src/users/entities/adminUser.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminUserSchema }]),
  ],
  exports: [MongooseModule],
})
export class AdminsSchemasModule {}
