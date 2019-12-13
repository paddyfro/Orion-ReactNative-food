import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer AWlapWEn7LAmCmN3Nvac4i2rHzCVvs9kP80PYkPI9Sx2_tvVhIIlpbKCyiZ2m4mV4aKqIuGqDlLPhPot72Oo9lvnkTCptETar5qpNpUZQzXzHw8NHymkSrfrq0O7XXYx'
    }
});

// yelp.get('/search');