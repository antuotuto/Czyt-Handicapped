export const instance = axios.create({
    baseURL:'http://0.0.0.0:8010/api/',
    timeout:10000,
    headers:{'X-Custom-Header':'foobar'}
});
