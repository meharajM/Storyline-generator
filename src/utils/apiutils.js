export const apiPathHelper = function(endPoint) {
    const apiPort = '8000';
    const host = window.location.hostname;
    const urlScheme = 'http'; //needs to be changed to https
    return `${urlScheme}://${host}:${apiPort}/${endPoint}`
}
export default {
    apiPathHelper
}