import axios from "axios";

export default {
  // Gets all books
  createCampaign: function (campaignData) {
    return axios.post("/api/campaign", campaignData);
  },
  
};
