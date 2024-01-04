const geoOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4e509fb617mshd49c3b61526a2d2p16f22djsn96f5876a6a57',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }

};

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"

const WEATHER_API_KEY = '2a722893e35c8d4bdaae468daf833004';

export {geoOptions,GEO_API_URL,WEATHER_API_URL,WEATHER_API_KEY}
