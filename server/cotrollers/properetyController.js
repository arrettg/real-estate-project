const Zillow = require("node-zillow");
module.exports = {
  addNewListing: async (req, res) => {
    const { city, state, address, zipcode, image, price } = req.body;
    const { id } = req.session.agent;
    const agentProperty = await req.app
      .get("db")
      .add_agent_listing([city, state, address, zipcode, image, price, id]);
    return res.status(200).json(agentProperty);
  }
  // searchZillow: async (req,res) =>{
  //   const {ZWSID} = process.env
  //   const zillow = new Zillow(ZWSID)
  //   const paramaters
  // }
};
