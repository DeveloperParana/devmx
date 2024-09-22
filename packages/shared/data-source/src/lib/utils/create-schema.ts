import { Document, ObjectId, Schema } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';

export function createSchema<T>(target: new () => T): Schema<T> {
  const schema = SchemaFactory.createForClass<T>(target);
  const proto = target.prototype;
  const descriptors = Object.getOwnPropertyDescriptors(proto);

  for (const name in descriptors) {
    if (name !== 'constructor' && typeof proto[name] === 'function') {
      schema.methods[name] = proto[name];
    }

    if (descriptors[name].get || descriptors[name].set) {
      const virtual = schema.virtual(name);

      if (descriptors[name].get) {
        virtual.get(descriptors[name].get);
      }

      if (descriptors[name].set) {
        virtual.set(descriptors[name].set);
      }
    }
  }

  schema.virtual('id').get(function (this: Document<ObjectId>) {
    return this._id.toString();
  });

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
      delete ret['_id'];
    },
  });

  schema.set('toObject', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
      delete ret['_id'];
    },
  });

  return schema;
}
