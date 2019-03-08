var list = []
var sortedlist = []

function storeList(num) {
  list.push(num)
  return list
}

function sortList(list) {
  sortedlist = list.sort(function(a,b) {
    a - b
  });
  return list
}

// storeList(9);
// storeList(10);

// sortList(list);
// console.log(sortedlist);


module.exports = {
  storeList: storeList
  sortedlist: sortedlist
};

