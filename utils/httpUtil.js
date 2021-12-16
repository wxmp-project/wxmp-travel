function httpRequest(url, requestData, successCallback) {
  let res = url(requestData);
  successCallback && successCallback(res);
}

module.exports = {
  http: httpRequest,
};
