import axios from 'axios';

const KEY = 'AIzaSyBal3MdGzYmCIx803p3SkAfnLSbwfxD8_M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});