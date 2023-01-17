
const testShop = new Store('lavka');

const test0 = new Wine('buhlo','ssanina',100,14);
const test1 = new Wine('buhlo1','ssanina polnaja',30,11);
const test2 = new Wine('poilo ELITnoe','samogonshiki',150,19);
const test3 = new Milk('milkSTD','burenka1',7.2,3.6);
const test4 = new Milk('ecoMilk','burenkaECO',20,4.2);
const test5 = new Milk('soiMilk','China',18,0.2);
const test6 = new Chocolate('economy','unnamed',2,'who knows?');
const test7 = new Chocolate('elite','Puratos',33,'extra dark fine chocolate');
const test8 = new Chocolate('random gift','buhgalteria team',2,'the better way is have not this kind of goods');




testShop.addProduct(test0);
testShop.addProduct(test1);
testShop.addProduct(test2);
testShop.addProduct(test3);
testShop.addProduct(test4);
testShop.addProduct(test5);
testShop.addProduct(test6);
testShop.addProduct(test7);
testShop.addProduct(test8);

console.log('output testing ALL',testShop.getAll());
console.log('output testing MILK',testShop.getByType('Milk'));
console.log('output testing WINE',testShop.getByType('Wine'));
console.log('output testing CHOCOLATE',testShop.getByType('Chocolate'));
console.log('output testing ttt',testShop.getByType('Ccolate'));