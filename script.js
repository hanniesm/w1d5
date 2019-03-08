var myModule = require("./customSorting")

myModule.storeList(9);
myModule.storeList(10);
myModule.storeList(1);
myModule.storeList(5);
myModule.storeList(2);

console.log(myModule.showList());
console.log(myModule.sortedlist());
