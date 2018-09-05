import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import Collection from "../Collection.js";

Meteor.startup(() => {
  Tracker.autorun(() => {
    const subscription = Meteor.subscribe("collection");

    if (!subscription.ready()) {
      return;
    }

    console.table(Collection.find().fetch());
  });
});
