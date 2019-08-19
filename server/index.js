const path = require("path");
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./cotrollers/authController");
const propertyCtrl = require("./cotrollers/properetyController");
const userCtrl = require("./cotrollers/userController");
const mailerCtrl = require("./cotrollers/mailerController");
const auth = require("./middleware/authMiddleware");

const PORT = 4040;

const { SESSION_SECRET, CONNECTION_STRING, ZWSID, USER, PASS } = process.env;

const app = express();
const server = require("http").server;
const io = require("socket.io")(server);

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

//auth endpoints
app.post("/auth/register/user", authCtrl.registerUser);
app.post("/auth/register/agent", authCtrl.registerAgent);
app.post("/auth/login/user", authCtrl.userLogin);
app.post("/auth/login/agent", authCtrl.agentLogin);
app.get("/auth/logout", authCtrl.logout);

//mailer

app.post("/send", mailerCtrl.send);

//user enpoints
app.get("/api/agents", userCtrl.findAgent);

//property endpoints
app.post("/api/properties", propertyCtrl.addNewListing);
app.put("/api/properties/:id", auth.agentsOnly, propertyCtrl.editListing);
app.delete("/api/properties/:id", auth.agentsOnly, propertyCtrl.deleteListing);
app.get("/api/properties", propertyCtrl.getAgentListings);

app.listen(PORT, () => console.log(`LISTEN on ${PORT}`));
