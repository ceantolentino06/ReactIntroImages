import axios from "axios";

export default axios.create({
   baseURL: "https://api.unsplash.com",
   headers: {
      Authorization:
         "Client-ID 6c09a79e4ff4474e9eb3bcf39ffcdd8dc6ee2cceb6b44c5afc734ac74beb2178"
   }
});
