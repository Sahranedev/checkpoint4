const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPassword,
  verifyProfPassword,
} = require("./services/auth");

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const professorControllers = require("./controllers/professorControllers");
const courseControllers = require("./controllers/courseControllers");
const authControllers = require("./controllers/authControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.post(
  "/api/login-professor",
  authControllers.getProfByEmailWithPasswordAndPassToNext,
  verifyProfPassword
);

// Gestion des users
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, userControllers.add);
router.put("/api/users/:id", userControllers.edit);
router.delete("/api/users/:id", userControllers.destroy);

// Gestion des profs
router.get("/api/professors", professorControllers.browse);
router.get("/api/professors/:id", professorControllers.read);
router.post("/api/professors", hashPassword, professorControllers.add);
router.put("/api/professors/:id", professorControllers.edit);
router.delete("/api/professors/:id", professorControllers.destroy);

// Gestion des cours

router.get("/api/courses", courseControllers.browse);
router.get("/api/courses/:id", courseControllers.read);
router.post("/api/courses", courseControllers.add);
router.put("/api/courses/:id", courseControllers.edit);
router.delete("/api/courses/:id", courseControllers.destroy);

module.exports = router;
