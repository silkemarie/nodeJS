import { Router } from "express";

const loginRouter = Router();

export default loginRouter;


loginRouter.post("/login", (req, res) => {
  const user = users.find(
    (user) =>
      user.username === req.body.username &&
      user.password === req.body.password
  );
  if (user) {
    res.status(200).send({ data: user.userId });
  }
  else {
    res.status(404).send("No match")
  }
})

const users = [
  {
    userId: 1,
    username: "admin",
    password: "admin"
  },
  {
    userId: 2,
    username: "test",
    password: "123"
  },
];