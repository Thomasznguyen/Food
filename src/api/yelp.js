import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2cZg1bdNSTjIZycRcJxpbxPFYLtf3EGiLnloYWhXYWljfOAVuhvjFSo251tAmbutfQ85VgDFujUm2njvsPY3hQKxhXVXUNEZg9zIMPIhHMLrOPPab3fdbTClbuvCX3Yx',
  },
});
