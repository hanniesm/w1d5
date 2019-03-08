var myModule = require("./customSorting")

console.log(myModule.showList());

myModule.storeList(9);
myModule.storeList(10);
myModule.storeList(1);
myModule.storeList(5);
myModule.storeList(2);

console.log(myModule.showList());
console.log(myModule.sortedlist());
