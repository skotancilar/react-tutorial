import axios from 'axios'

const KEY = 'AIzaSyC4KrKikCYtRE0G3wrth2WgsGpb5z2AsOU';


export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY,
   }
})