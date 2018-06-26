require("./string");
Number.prototype.withSeparator = function (separator, fixed) {
  var x = fixed >= 0 ? this.toFixed(fixed) : this.toString();
  if (this === eval(x)) x = this.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1" + separator + "$2");
  return x;
};
Number.prototype.toTimeString = function (format) {
  let current = this;
  let days = Math.floor(current / 86400);
  current = current % 86400;
  let hours = Math.floor(current / 3600);
  current = current % 3600;
  let minutes = Math.floor(current / 60);
  current = current % 60;
  let seconds = Math.floor(current);
  days = days === 0 ? "" : days < 10 ? `0${days}D ` : `${days}D `;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return format
    ? format
      .replaceAll("DD", days)
      .replaceAll("HH", hours)
      .replaceAll("mm", minutes)
      .replaceAll("ss", seconds)
    : `${days + hours}:${minutes}:${seconds}`;
};
