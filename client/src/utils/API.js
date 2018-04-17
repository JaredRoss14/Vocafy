import axios from "axios";

export default {
  // Gets all books
  getChangeActivators: function (campaignId) {
    return axios.get("/api/" + campaignId + "/changeactivators");
  },
  // Gets the book with the given id
  getChangeActivator: function (campaignId, id) {
    return axios.get("/api/" + campaignId + "/changeactivators/" + id);
  },
  // Deletes the book with the given id
  deleteChangeActivator: function (campaignId, id) {
    return axios.delete("/api/" + campaignId + "/changeactivators/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
