if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    consumer_key:process.env.API_KEY,
    consumer_secret:process.env.API_SECRET_KEY,
    access_token:process.env.ACCESS_TOKEN,
    access_token_secret:process.env.ACCESS_TOKEN_SECRET
}