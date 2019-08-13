module.exports = {
  findAgent: async (req, res) => {
    const { city, state } = req.query;
    const agent = await req.app.get("db").find_agent([city, state]);
    return res.status(200).json(agent);
  }
};
