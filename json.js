JSON.toCamelCase = function(json) {
  if (json instanceof Array) {
    return json.map(
      item => (typeof item === "object" ? JSON.toCamelCase(item) : item)
    );
  } else {
    let response = {};
    for (let key in json) {
      if (json.hasOwnProperty(key)) {
        let value = json[key];
        if (
          value instanceof Array ||
          (value !== null && typeof value === "object")
        ) {
          value = JSON.toCamelCase(value);
        }
        response[
          `${key.charAt(0).toLowerCase()}${key.slice(1)}` || `${key}`
        ] = value;
      }
    }
    return response;
  }
}
module.exports = {}