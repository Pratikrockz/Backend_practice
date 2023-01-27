const express = require("express")
const app = express()
app.listen(3000)

app.use(express.json());

let users = [
    {
        'id': 1,
        'name': "Pratik",
    },
    {
        'id': 2,
        'name': "ABC",
    },
    {
        'id': 3,
        'name': "CBA",
    },
];

const userRouter = express.Router()
app.use("/user", userRouter);

userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)


userRouter.route("/:id")
    .get(getUserId)

function getUser(req, res) {
    res.send(users)
}

function postUser(req, res) {
    users = req.body;
    res.json({
        message: "data received successfully",
        user: req.body,
    })
}

function updateUser(req, res) {
    let newdata = req.body;
    for (key in newdata) {
        users[key] = newdata[key];
    }
    res.send(users);
}

function deleteUser(req, res) {
    users = {};
    res.json({
        message: "delete the value",
        users: users,
    });
}

function getUserId(req, res) {
    let paramId = req.params.id
    let obj = {}
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == paramId) {
            obj = users[i]
        }
    }
    res.json({
        message: "user Tagged Given Id",
        data: obj
    })

}

