import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Mapper extends Document {
  @Prop()
  name: string;

  @Prop({ type: 'mixed' })
  dataMapper: Record<string, unknown>;
}

export const MapperSchema = SchemaFactory.createForClass(Mapper);
MapperSchema.index({ name: 1 }, { unique: true });
