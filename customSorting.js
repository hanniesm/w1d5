var list = [2, 10, 5, 2]
var sortedlist = []

// function storeList(num) {
//   list.push(num)
//   return list
// }

function sortList(list) {
  sortedlist = list.sort(function(a,b) {
    return a - b
  });
  return sortedlist
}

// console.log(sortList(list));


module.exports = {
  storeList: function(num) {
      list.push(num)
  return list;
  },

  showList: function() {
    return list;
  },

  sortedlist: function() {
    return sortList(list)
  }
};

