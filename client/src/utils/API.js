import axios from "axios";

export default {
  // Gets all books
  signup: function() {
    return axios.post("/user/signup");
  },
};
