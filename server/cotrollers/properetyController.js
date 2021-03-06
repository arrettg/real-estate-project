module.exports = {
  addNewListing: async (req, res) => {
    const { city, state, address, zipcode, image, price } = req.body;
    const { id } = req.session.agent;
    const agentProperty = await req.app
      .get("db")
      .add_agent_listing([city, state, address, zipcode, image, price, id]);
    return res.status(200).json(agentProperty);
  },
  editListing: async (req, res) => {
    const { id } = req.params;
    const aid = req.session.agent.id;
    const { city, state, address, zipcode, image, price } = req.body;
    console.log(req.params, req.body);
    const updateProperty = await req.app
      .get("db")
      .update_listing([city, state, address, zipcode, image, price, id]);
    const agentProperties = await req.app.get("db").get_property(aid);
    return res.status(200).json(agentProperties);
  },
  deleteListing: async (req, res) => {
    const { id } = req.params;
    const deleteProperty = await req.app.get("db").delete_listing(id);
    return res.sendStatus(200);
  },
  getAgentListings: async (req, res) => {
    const { id } = req.session.agent;
    const agentProperty = await req.app.get("db").get_property(id);
    return res.status(200).json(agentProperty);
  }
};
