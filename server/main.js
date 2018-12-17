import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

const Collection = new Mongo.Collection("collection");

Meteor.startup(() => {
  Collection.findOne();
});
