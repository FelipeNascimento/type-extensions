Array.prototype.asyncForEach = function (callback) {
  return new Promise((fulfill,reject)=>{
    let tasks = []
    for (let i = 0; i < this.length; i++) {
      tasks.push(callback(this[i], i, this));
    }
    Promise.all(tasks)
      .then(fulfill)
      .catch(reject)
  })
};
Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this
}