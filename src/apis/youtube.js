import axios from "axios";

const KEY = "AIzaSyDhy-Y2O2gQuGIKKKA7YA9m3i9G_R_CqIk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
