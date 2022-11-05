import axios from "axios";
//const config = require('../../config.js');
//console.log(config.HOST+':'+config.PORT+'/api');
let Api = axios.create({
  baseURL: "http://localhost/api"
 //baseURL: "https://rollerbe.herokuapp.com/api"
});

Api.defaults.withCredentials = true;

export default Api;
