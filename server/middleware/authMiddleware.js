module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json("Please log in as a user");
    }
    next();
  },
  agentsOnly: (req, res, next) => {
    if (!req.session.agent) {
      return res.status(403).json("You must be an agent. Please log in");
    }
    next();
  }
};
