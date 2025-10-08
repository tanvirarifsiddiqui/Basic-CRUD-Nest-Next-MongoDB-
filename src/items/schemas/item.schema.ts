import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema({ timestamps: true }) // add createdAt/updatedAt timestamps
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
