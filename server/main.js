const Cars = new Mongo.Collection('cars');

const fakeDelay = async function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('we waited long enough');
    }, 1000);
  });
}

Meteor.methods({
  async findcar() {
    await fakeDelay();
    return Cars.findOne();
  }
});
