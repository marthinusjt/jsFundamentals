/**********************/
//Constructor Function
//**********************/
//Functions are terific ways to, using parameters, create a unique solution for different circumstances. Say we needed several different objects, all with the same keys but different values. I could do this one of two different ways
//1
let person1 = {
    name:'Macy',
    age: 24,
    canVote: true
  };
  let person2 = {
   name:'Jeremy',
   age: 15,
   canVote: false
  };
  let person3 = {
   name:'Felicity',
   age: 38,
   canVote: true
  };
  //Thats a lot of repetitive coding! There has to be a better way to be able to create multiple objects that have the same structures with different values? Yes! And theyre called constructor functions!
  function Person(name,age,canVote){
  // (1)      (2)       (3)
    this.name = name;
  // (4)  (5)    (6)
    this.age = age;
    this.canVote = canVote;
  }
  let person4 = new Person('James',80,true);
  //            (7)   (8)
  /*
  1 - The function keyword
  2 - The function name. For Constructor functions, the name should be capitolized.
  3 - The parameters. These will be the values of the object once this function is in use.
  4 - The 'this' keyword. 'this' gives us the ability to refer back to whatever called, or activates it. In this case, 'this' refers to 'Person'.
  5 - This will be the key of the new object we will create. This is NOT refering to the parameter
  6 - This is refering to the parameter we pass through our constructor function
  7 - The new keyword is calling our
  */
  function people(name,age,canVote){
   let people  = {};
      people.name = name;
      people.age = age;
      people.canVote = canVote;
      return people;
    }
    let people4 = new people('James',80,true);
    console.table(people4);
  class Person{
     constructor(name){ // this is what allows us to "construct" a property onto our new object. We are using the constructor to bring in that parameter, and then using the 'this ' keyword, we set that property to that value;
         this.name = name;
     }
     hello(){// called a method when its coming from a class. objects can have methods attatched, just like we can call a method for arrays and string. those are objects that have certain properties and methods too
         return this.name;
     }
  }
  class CoolGuy extends Person{ // this is like a class that has access to the properties and methods of another class, and can build up on those
     heyy(){
         return super.hello() +  'and I am a cool guy'; // super, a way to reach back to the class it extends from to get methods
     }
  }
  class NotCoolGuy extends Person{
     boo(){
         return super.hello() +  'and I am not a cool guy';
     }
  }
  let a = new Person("Autumn");
  console.log(a.hello())
  const maker = (name) =>{
     const nameIt = new Person(name);
     const tryer = nameIt.hello();
     if(tryer === 'Autumn'){
         const autumn2 = new CoolGuy(tryer);
         console.log(autumn2.heyy());
     } else{
         const ing = new NotCoolGuy(tryer);
         console.log(ing.boo());
     }
  };
  maker('Ing');
  