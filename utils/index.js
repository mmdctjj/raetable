export var formatSearch = function formatSearch(search, initValue) {
  var search_ = search.slice(search.indexOf('?'));
  return search_.slice(1).split('&').reduce(function (pre, curr) {
    if (curr.split('=')[1]) pre[curr.split('=')[0]] = curr.split('=')[1].length > 15 || decodeURI(curr.split('=')[1]) === '' || isNaN(Number(decodeURI(curr.split('=')[1]))) ? decodeURI(curr.split('=')[1]) : Number(decodeURI(curr.split('=')[1]));
    return pre;
  }, initValue !== null && initValue !== void 0 ? initValue : {
    current: 1,
    pageSize: 10
  });
};
export var objectToString = function objectToString(object) {
  return JSON.stringify(object);
};
export var objectIsQqual = function objectIsQqual(object, target) {
  return objectToString(object) === objectToString(target);
};