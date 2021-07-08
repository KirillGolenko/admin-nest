import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Log extends Document {
  @Prop()
  eventType: string;

  @Prop()
  message: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
