const mongoose = require("mongoose");
require("dotenv").config();

// 1) Install and Set Up Mongoose
/** CONNECT TO THE MONGODB ATLAS DATABASE USING THE PROVIDED URI **/
/* MONGO_URI=mongodb+srv://Username:Password@ServerOrCluster/DesiredDatabaseName?AdditionalConnectionOptions */
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 2) Create a "Person" Model
/** ASSIGN MONGOOSE SCHEMA TO A VARIABLE **/
const Schema = mongoose.Schema;

/** CREATE PERSON SCHEMA **/
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: { type: [String], required: true },
});

/** CREATE PERSON MODEL FROM THE SCHEMA **/
const Person = mongoose.model("Person", personSchema);

// 3) Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Kelly Cristina Moreira",
    age: 19,
    favoriteFoods: ["Strogonoff", "Rice and Beans"],
  });

  person.save((err, data) => (err ? done(null) : done(null, data)));
};

// 4) Create Many Records People with model.create()
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) =>
    err ? done(err) : done(null, data),
  );
};

// 5) Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) =>
    err ? done(err) : done(null, data),
  );
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

