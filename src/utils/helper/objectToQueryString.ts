export const objectToQueryString = (obj: any) => {
  var str = [];
  for (var p in obj) {
    if (obj[p]) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
};
