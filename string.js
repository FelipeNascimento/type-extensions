const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
String.prototype.replaceAll = function (old_str, new_str) {
  return this.split(old_str).join(new_str);
};
String.prototype.truncate = function (length, separator) {
  if (this.length <= length) return this;
  separator = separator || "...";
  var sepLen = separator.length,
    charsToShow = length - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);
  return (
    this.substr(0, frontChars) +
    separator +
    this.substr(this.length - backChars)
  );
};
String.prototype.toTitleCase = function () {
  return this.replace(
    /\w\S*/g,
    txt =>
      txt.length > 1
        ? txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        : txt
  );
};
String.toMD5 = function(str){
  let crypto = require('crypto');
  let md5 = crypto.createHash('md5')
    .update(`${str}`)
    .digest("hex");
  return md5
}
String.prototype.toMD5 = function(){
  return String.toMD5(this)
}

String.GUID = function () {
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`.toLowerCase()
}