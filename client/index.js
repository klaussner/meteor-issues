import { Mongo } from 'meteor/mongo';

const Collection = new Mongo.Collection(null);
Collection.findOne({ _id: '' });
