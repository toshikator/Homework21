class Product {
    static #amountOfInstances = 0;
    static getAmountOfInstances() {
        return this.#amountOfInstances
    }
    #id;
    #title;
    #manufacture;
    #price;
    constructor(title = 'defaultTitle', manufacture = 'defaultManufacture', price = 0) {
        this.titleSetter = title;
        this.manufactureSetter = manufacture;
        this.priceSetter = price;
        this.#id = Product.#amountOfInstances++;
    }
    get idGetter(){ return this.#id; }
    get titleGetter(){ return this.#title; }
    get priceGetter(){ return this.#price; }
    get manufactureGetter(){ return this.#manufacture; }
    set titleSetter(value){
        if (typeof value === "string") {
            this.#title = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to title');
        }
    }
    set manufactureSetter(value){
        if (typeof value === "string") {
            this.#manufacture = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to manufacture');
        }
    }
    set priceSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0))){
            this.#price = Number(value);
        } else{
            console.error('ERROR!!! Trying to set not a number to price');
        }
    }
}

class Milk extends  Product{
    #fat;
    constructor(title, manufacture, price, fat) {
        super(title, manufacture, price);
        this.fatSetter = fat;
    }

    get fatGetter(){ return this.#fat; }
    set fatSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0)) && (!Number.isNaN(Number(value) < 100))){
            this.#fat = Number(value);
        } else{
            console.error('ERROR!!! Trying to set incorrect value to fat');
        }
    }
}
class Chocolate extends Product{
    #kind;
constructor(title, manufacture, price, kind) {
    super(title, manufacture, price);
    this.kindSetter = kind;
}

    get kindGetter(){ return this.#kind; }
    set kindSetter(value){
        if (typeof value === "string") {
            this.#kind = value;
        } else {
            console.error('ERROR!!! Trying to set not a string to kind');
        }
    }
}
class Wine extends  Product{
    #alcohol;
    constructor(title, manufacture, price, alcohol) {
        super(title, manufacture, price);
        this.alcoholSetter = alcohol;
    }

    get alcoholGetter(){ return this.#alcohol; }
    set alcoholSetter(value){
        if (!Number.isNaN(Number(value)) && value !== undefined && (!Number.isNaN(Number(value) >= 0)) && (!Number.isNaN(Number(value) < 100))){
            this.#alcohol = Number(value);
        } else{
            console.error('ERROR!!! Trying to set incorrect value to alcohol');
        }
    }
}

class Store {
    #storeInfo = {};
    #products = [];
    #productType = ['Milk', 'Chocolate', 'Wine'];

    constructor(name) {
        this.nameSetter = name;
    }
    set nameSetter(value){
        if (typeof value === "string") {
            this.#storeInfo['storeName'] = value;
        } else {
            console.error('ERROR!!! Try to set not a string to name of the store');
        }
    }
    addProduct(product){
        if (product instanceof Product && !this.#products.includes(product)){
            this.#products.push(product);
        } else {
            console.error('ERROR!!! Trying to add incorrect instance to products, or add existing  product');
        }
    }
    getAll(){
        return this.#products;
    }
    getByType(type){
        if (this.#productType.includes(type)) {
            return this.#products.filter((product) => {
                return product.constructor.name === type;
            });
        } else {
            console.error('ERROR!!! Trying to get incorrect type of product');
        }
    }
}


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