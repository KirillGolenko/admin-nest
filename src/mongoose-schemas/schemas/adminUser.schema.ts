import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AdminUser extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: Object })
  breed: {
    type: object;
  };

  @Prop({ type: Date })
  dateCreated: {
    type: Date;
  };
}

export const AdminUserSchema = SchemaFactory.createForClass(AdminUser);
