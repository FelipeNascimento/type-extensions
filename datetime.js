require("./string");
Date.prototype.toString = function (format) {
  format = format || "yyyy-MM-ddTHH:mm:ssZ";
  var MM = this.getMonth() + 1;
  var dd = this.getDate();
  var yyyy = this.getFullYear();
  var HH = this.getHours();
  var mm = this.getMinutes();
  var ss = this.getSeconds();
  var T = -(this.getTimezoneOffset() / 60);
  var s = T < 0 ? "-" : "+";
  MM = MM < 10 ? "0" + MM : MM;
  dd = dd < 10 ? "0" + dd : dd;
  HH = HH < 10 ? "0" + HH : HH;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss === 0 ? "00" : ss < 10 ? "0" + ss : ss;
  T = Math.abs(T);
  var Z = s + (T < 10 ? `0${T}:00` : `${T}:00`);
  var str = format
    .replaceAll("yyyy", yyyy)
    .replaceAll("MM", MM)
    .replaceAll("dd", dd)
    .replaceAll("HH", HH)
    .replaceAll("mm", mm)
    .replaceAll("ss", ss)
    .replaceAll("Z", Z);
  return str;
};
Date.prototype.toUTCString = function (format) {
  format = format || "yyyy-MM-ddTHH:mm:ssZ";
  var MM = this.getUTCMonth() + 1;
  var dd = this.getUTCDate();
  var yyyy = this.getUTCFullYear();
  var HH = this.getUTCHours();
  var mm = this.getUTCMinutes();
  var ss = this.getUTCSeconds();
  MM = MM < 10 ? "0" + MM : MM;
  dd = dd < 10 ? "0" + dd : dd;
  HH = HH < 10 ? "0" + HH : HH;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss === 0 ? "00" : ss < 10 ? "0" + ss : ss;
  var Z = "+00:00";
  var str = format
    .replaceAll("yyyy", yyyy)
    .replaceAll("MM", MM)
    .replaceAll("dd", dd)
    .replaceAll("HH", HH)
    .replaceAll("mm", mm)
    .replaceAll("ss", ss)
    .replaceAll("Z", Z);
  return str;
};
Date.prototype.addYears = function (y) {
  this.setFullYear(this.getFullYear() + y);
  return this;
};
Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + days);
  return this;
};
Date.prototype.addHours = function (hours) {
  this.setHours(this.getHours() + hours);
  return this;
};
Date.prototype.addMinutes = function (minutes) {
  this.setMinutes(this.getMinutes() + minutes);
  return this;
};
Date.prototype.addSeconds = function(s) {
  this.setSeconds(this.getSeconds() + s)
  return this
}
Date.prototype.addMilliseconds = function (ms) {
  this.setMilliseconds(this.getMilliseconds() + ms);
  return this;
};
Date.toDate = function (str) {
  const aux = str.split("T");
  const date = aux[0].split("-");
  const y = date[0];
  let M = date[1];
  const d = date[2];
  const time = aux.length > 1 ? aux[1].split(":") : [];
  const H = time.length < 1 ? 0 : time[0];
  const m = time.length < 2 ? 0 : time[1];
  const s = time.length < 3 ? 0 : time[2];
  M = parseInt(M) - 1;
  return new Date(y, M, d, H, m, s);
};
Date.today = function () {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};
