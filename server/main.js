import { Meteor } from "meteor/meteor";
import { MongoInternals } from "meteor/mongo";
import Collection from "../Collection.js";

let client;
let rawCollection;

Meteor.startup(() => {
  if (Collection.find().count() < 1) {
    Collection.insert({
      _id: "A",
      field: ":)"
    });

    Collection.insert({
      _id: "B",
      field: ":("
    });
  }

  client = MongoInternals
    .defaultRemoteCollectionDriver()
    .mongo
    .client;

  rawCollection = Collection.rawCollection();
});

Meteor.publish("collection", function () {
  return Collection.find();
});

Meteor.methods({
  async transaction() {
    const session = client.startSession();
    session.startTransaction();

    await rawCollection.updateOne(
      { _id: "A" },
      { $set: { anotherField: Math.random() } },
      { session }
    );

    await rawCollection.updateOne(
      { _id: "B" },
      { $set: { anotherField: Math.random() } },
      { session }
    );

    try {
      await session.commitTransaction();
    } catch (e) {
      console.log(e);
    } finally {
      session.endSession();
    }
  }
});
