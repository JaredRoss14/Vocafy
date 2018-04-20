import axios from "axios";

export default {
  // Gets all books
  createCampaign: function (campaignData) {
    return axios.post("/api/campaign", campaignData);
  },

  createChangeActivator: function (changeActivatorData) {
    return axios.post("/api/changeactivator", changeActivatorData);
  },

  findChangeActivators: function (changeActivatorIds) {
    return axios.get("/api/changeactivator/" + changeActivatorIds)
  },

  findCampaign: function (campaignId) {
    return axios.get("/api/campaign/" + campaignId)
  },

  findAllCampaigns: function () {
    return axios.get("/api/campaign/")
  },
  
};
