import { Router } from "express";

const loginRouter = Router();

export default loginRouter;


//todo: renderpage
// + html side til login med form
// + loginRouter.post til at hente data fra form 
// + hvis man er logget rigtigt ind -> admin side
// + hvis fejl i login -> til forside 
// + admin side kan man skrive ting på (post)

loginRouter.post("/login", (req, res) => {
    const user = users.find(
        (user) =>
          user.username === req.body.username &&
          user.password === req.body.password
      );
      if(user){
        res.status(200).send({ data: user.userId});
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