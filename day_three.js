class Hamster {
    constructor(name) {
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}
class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`I am ${this.name} hello`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}
const timmy = new Person("Timmy");
const repeatEat = () => {
    for(let i = 0; i < 5; i++){
        timmy.ageUp();
    }
}
    const repeatWorkOut = () => {
        for(let i = 0; i < 5; i++){
            timmy.exercise();
        }
    }
    const bigBoy = () => {
        for(let i = 0; i < 9; i++){
            timmy.ageUp();
        }
    }
    const teenageTimmy = () => {
        for(let i = 0; i < 15; i++){
            timmy.ageUp();
        }
    }
    const eatTwiceTim = () => {
        for(let i = 0; i < 2; i++){
            timmy.eat();
        }
    }
    const realWorkOut = () => {
        for(let i = 0; i < 2; i++){
            timmy.exercise();
        }
    }

    
    repeatEat();
    console.log(timmy);
    repeatWorkOut();
    console.log(timmy);
    bigBoy();
    console.log(timmy);
    const gus = new Hamster("Gus");
    console.log(timmy);
    gus.owner = "Timmy";
    console.log(gus);
    timmy.buyHamster(gus);
    console.log(timmy);
    teenageTimmy();
    console.log(timmy);
    eatTwiceTim();
    console.log(timmy);
    realWorkOut();
    console.log(timmy);


    // Dinna Fuu
    class Dinner {
        constructor(appetizer, entree, dessert) {
            this.appetizer = appetizer;
            this.entree = entree;
            this.dessert = dessert;
        }
    }
    
    class Chef {
        dinners = [];
    
        chefDinner(appetizer, entree, dessert) {
            const dinner = new Dinner(appetizer, entree, dessert);
            this.dinners.push(dinner);
        }
    }
    
    const chef = new Chef();
    chef.chefDinner("Chicken Nuggets", "Steak", "Ice cream");
    chef.chefDinner("Breadsticks", "Pasta", "Cheesecake");
    chef.chefDinner("Fries", "Chicken", "Pudding");
    
    console.log(chef.dinners);
    