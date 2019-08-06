require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./cotrollers/authController");
const propertyCtrl = require("./cotrollers/properetyController");
const auth = require("./middleware/authMiddleware");

const PORT = 4040;

const { SESSION_SECRET, CONNECTION_STRING, ZWSID } = process.env;

const app = express();

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

//auth endpoints
app.post("/auth/register/user", authCtrl.registerUser);
app.post("/auth/register/agent", authCtrl.registerAgent);
app.post("/auth/login/user", authCtrl.userLogin);
app.post("/auth/login/agent", authCtrl.agentLogin);
app.get("/auth/logout", authCtrl.logout);

//property endpoints
app.post("/api/properties", auth.agentsOnly, propertyCtrl.addNewListing);
app.put("/api/properties/:id", auth.agentsOnly, propertyCtrl.editListing);
app.delete("/api/properties/:id", auth.agentsOnly, propertyCtrl.deleteListing);

app.listen(PORT, () => console.log(`LISTEN on ${PORT}`));
