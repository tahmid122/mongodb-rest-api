const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  singleUser,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUser);
router.get("/:id", singleUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
