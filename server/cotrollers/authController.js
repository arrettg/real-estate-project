const bcrypt = require("bcryptjs");
module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email } = req.body;
    const db = req.app.get("db");
    const result = await db.get_user([username]);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).json("username taken");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registerUser = await db.register_user([username, email, hash]);
    const user = registerUser[0];
    req.session.users = {
      username: user.user_name,
      id: user.id
    };
    return res.status(201).send(req.session.user);
  },
  registerAgent: async (req, res) => {
    const {
      firstName,
      lasName,
      image,
      city,
      state,
      phone,
      email,
      password
    } = req.body;
    const db = req.app.get("db");
    const result = await db.get_agent([email]);
    const existingAgent = result[0];
    if (existingAgent) {
      return res.status(409).json("email already in use");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registerAgent = await db.register_agent([
      firstName,
      lasName,
      image,
      city,
      state,
      phone,
      email,
      hash
    ]);
    const agent = registerAgent[0];
    req.session.agents = {
      firstName: agent.first_name,
      lastName: agent.last_name,
      image: agent.image,
      city: agent.city,
      state: agent.state,
      phone: agent.phone,
      email: agent.email,
      id: agent.id
    };
  },
  userLogin: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.get_user([username]);
    const user = foundUser[0];

    if (!user) {
      return res.status(401).json("username or password incorrect");
    }
    const isAuth = await bcrypt.compareSync(password, user.password);
    if (isAuth === false) {
      return res.status(403).json("username or password incorrect");
    }
    req.session.user = {
      id: user.user_id,
      username: user.user_name
    };
    console.log(req.session.user);
    res.json(req.session.user);
  },
  agentLogin: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const foundAgent = await db.get_agent([email]);
    const agent = foundAgent[0];

    if (!agent) {
      return res.status(403).json("email or password is incorrect");
    }
    const isAuth = await bcrypt.compareSync(password, agent.password);
    if (isAuth === false) {
      return res.status(403).json("email or password is incorrect");
    }
    req.session.agent = {
      id: agent.agent_id
    };
    console.log(req.session.agent);
    res.json(req.session.agent);
  },
  logout: async (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  }
};
