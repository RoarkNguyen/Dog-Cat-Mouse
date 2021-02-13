function Cat() {
  this.stomach1 = [];
}
Cat.prototype.eat = function (mouse) {
  this.stomach1.push(mouse);
};
module.exports = Cat;
