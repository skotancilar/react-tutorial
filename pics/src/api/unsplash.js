import axios from 'axios'

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID C8KKw4yE0Tjz8I9MIKk_3_YoMiT6b2sZ1xsSNMCnCsQ'
   }
});

