var list = []

function sortList(list) {
  var sortedlist = list.sort(function(a,b) {
    return a - b
  });
  return sortedlist
}

module.exports = {
  storeList: function(num) {
    return list.push(num)
  },

  showList: function() {
    return list;
  },

  sortedlist: function() {
    return sortList(list)
  }
};

