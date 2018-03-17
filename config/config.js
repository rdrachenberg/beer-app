const db = require('db')
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    beer_maps_token: process.env.BEER_MAPS_TOKEN,
    google_token: process.env.GOOGLE_TOKEN
    
})
console.log(process.env.BEER_MAPS_TOKEN);
module.exports = db;