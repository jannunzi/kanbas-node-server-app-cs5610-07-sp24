import db from "../Database/index.js";

export default function UserRoutes(app) {
  // CRUD
  const fetchAllUsers = (req, res) => {
    res.json(db.users);
  };
  const findUserById = (req, res) => {
    const id = req.params.id;
    const user = db.users.find((user) => user._id === id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send(`User with id ${id} not found`);
    }
  };
  const createUser = (req, res) => {};
  const register = (req, res) => {
    const newUser = req.body;
    const existingUser = db.users.find(
      (user) => user.username === newUser.username
    );
    if (existingUser) {
      res.status(400).send("Username already exists");
      return;
    }
    newUser._id = Date.now().toString();
    req.session["currentUser"] = newUser;
    db.users.push(newUser);
    res.json(newUser);
  };
  const login = (req, res) => {
    const credentials = req.body;
    const username = credentials.username;
    const password = credentials.password;
    const user = db.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      req.session["currentUser"] = user;
      res.json(user);
    } else {
      res.status(403).send("Username or password is incorrect");
    }
  };
  const updateUser = (req, res) => {};
  const logout = (req, res) => {
    req.session.destroy();
    res.send("Session Destroyed");
  };
  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (currentUser) {
      res.json(currentUser);
    } else {
      res.status(403).send("Not logged in");
    }
  };

  app.get("/api/users", fetchAllUsers);
  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  app.get("/api/users/profile", profile);
  app.get("/api/users/logout", logout);
}
