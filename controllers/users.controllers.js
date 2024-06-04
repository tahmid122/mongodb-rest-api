const users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await users.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(402).send(error.message);
  }
};
exports.createUser = async (req, res) => {
  try {
    let newUser = await new users({
      id: uuidv4(),
      name: req.body.name,
      age: req.body.age,
      class: req.body.class,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(402).send(error.message);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await users.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "User is deleted" });
  } catch (error) {
    res.status(402).send(error.message);
  }
};
exports.updateUser = async (req, res) => {
  try {
    await users.updateMany(
      { id: req.params.id },
      {
        $set: {
          name: req.body.name,
          age: Number(req.body.age),
          class: Number(req.body.class),
        },
      },
      { new: true }
    );
    res.status(200).json({ message: "User is updated" });
  } catch (error) {
    res.status(402).send(error.message);
  }
};

exports.singleUser = async (req, res) => {
  try {
    let singleUser = await users.find({ id: req.params.id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(402).send(error.message);
  }
};
