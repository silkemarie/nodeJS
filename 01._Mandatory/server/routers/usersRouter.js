import { response, Router } from "express";
import bcrypt from "bcrypt";
import db from "../database/connection_mysql.js"

const router = Router();


router.post("/api/users", async (req, res) => {
    const user = req.body;
    const saltRounds = 12;
    user.password = await bcrypt.hash(user.password, saltRounds);
    const [rows, fields] = await db.execute(`INSERT INTO users (mail, password) VALUES (?, ?, ?);`, [user.mail, user.password]);
    res.send({ data: rows });
});


router.post("/api/users/login", async (req, res) => {
    const body = req.body;
    const [rows, fields] = await db.execute(`SELECT * FROM users WHERE mail = ?`, [body.mail]);
    const isTrue = await bcrypt.compare(body.password, rows[0].password);
    
    console.log(isTrue);
    if (isTrue) {
        req.session.isLoggedin=true;
        res.send({ message: "Its a-okay" });
    } else {
        res.send({ message: "Its no good" });
    }
});


export default router;


//https://www.bloggernepal.com/2021/10/authentication-nodejs-bcrypt-express-session-jwt.html 



/*



app.set("view engine")


app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: "aSecret-UseENV",
    resave: false,
    saveUninitialized: false
}))



app.post("/signup", async (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    // let's make use of bcrypt to hash
    let hashedPassword = await hash(password, 10);

    let newUser = new User({
        name: name,
        email: email,
        password: hashedPassword
    })

    try {
        let user = await newUser.save();

        res.render('signup-result', {
            user: user,
            message: "Account Created",
            message2: false,
            success: true
        });

    } catch (error) {

        res.render('signup-result', {
            message: "Account Creation Failed",
            message2: 'The Email may have been already used.',
            success: false
        });
    }


})


app.post("/api/users/login", (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;

    //now we will get the user, then compare the hashedPassword (saved in DB)
    // with currently provided password
    User.findOne({ email: email }).then(async user => {
        if (user) {

            let passwordMatched = await compare(password, user.password);

            if (passwordMatched) {
                // email and password matched

                //let's save the user in the session
                req.session.user = user;

                res.render('login-result', {
                    message: "Login Success",
                    message2: false,
                    success: true
                });
            } else {

                //password did not match
                res.render('login-result', {
                    message: "Login Failed",
                    message2: "Email and password did not match.",
                    success: false
                });
            }



        } else {

            //user not found associated with that mail
            res.render('login-result', {
                message: "Login Failed",
                message2: "Email and password did not match.",
                success: false
            });

        }
    })
})

const isAuth = (req, res, next) => {
    if (req.session.user) {
        //if user exists on session
        next();
    } else {
        // else redirect to login
        res.redirect('/login');
    }
}

// a protected route
app.get("/me", isAuth, (req, res, next) => {
    let user = req.session.user;
    res.render('me', {
        user: user
    });
})






*/