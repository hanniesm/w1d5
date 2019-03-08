var list = []

function storeList(num) {
  list.push(num)
  return list
}


module.exports = {
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  },
  getCircumference: function(diameter) {
    var circumference = diameter * getPI();
    return circumference;
  }
};

