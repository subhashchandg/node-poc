const axios = require('axios');
const axiosRetry = require('axios-retry');

axiosRetry(axios, { retries: 3 });

async function requestWeb(methodType,urlString,jwt=null,data=null){
    return  await axios({
        method: methodType,
        url: urlString,
        headers: { Authorization: `Bearer ${jwt}` },
       ...( methodType ==='post' && {data:data})
    })
}
module.exports = requestWeb;