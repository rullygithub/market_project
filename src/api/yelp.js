import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer svg_hE-5NTuUwTlTlkBKxbyihvykLDsUVTlJntOftWdG3hFLdAAGg55tywvy8hB97cjYiVMjFbqo_xjRjt7JceQpNfsXHgK_GosN2nUFjxkOj5sWKr_H_8J43MbmZHYx',
  },
});


