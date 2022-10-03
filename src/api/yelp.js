import axios from'axios';

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:  "Bearer ROoJsOSwuUWbA6crmLranaIxyWvPL84ottnjqgGIA90R8ohlf3d0lsIpLzt1w0mH9C1DBaEtreBAYdmhWqJddJqCMkFba8QvjDKoHER-3ycIH9VA5z1SLk8NKTYzY3Yx"
    }
});