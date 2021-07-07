import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = AdminUser & Document;

@Schema()
export class AdminUser {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const AdminUserSchema = SchemaFactory.createForClass(AdminUser);
