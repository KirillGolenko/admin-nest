import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class ImporterConfig extends Document {
  @Prop()
  name: string;

  @Prop({ type: Object })
  config: Record<string, string>;
}

export const ImporterConfigSchema = SchemaFactory.createForClass(
  ImporterConfig,
);

ImporterConfigSchema.index({ name: 1 }, { unique: true });
