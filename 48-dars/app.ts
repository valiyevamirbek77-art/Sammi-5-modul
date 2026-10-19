// //1.CreatedAt decorator
// function CreatedAt<TBase extends { new(...args: any[]): {} }>(
//     constructor: TBase
// ) {
//     return class extends constructor {
//         readonly createdAt: Date = new Date();
//     };
// }

// //2.LogMethod decorator
// function LogMethod(
//     target: object,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
// ) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Calling ${propertyKey} with arguments:`, new Date())
//         return originalMethod.apply(this, args);
//     }
//     return descriptor;
// }

// aCreatedAt()
// class User {
//     constructor(public name: string, public age: number) {
//         // aLogmethod
//         getUserInfo() {
//             console.log(`User: ${this.name}, Age: ${this.age}`);
//         }
//     }
// }


//4 Product class
// aCreatedAt
// class Product {
//     constructor(public name: string, public price: number) {
//         // aLogMethod
//         getProductInfo() {
//             console.log(`Product: ${this.name}, Price: ${this.price}`);
//         }
//     }
// }

//5 Create instances
// type CreatedAtType = { createdAt: Date };

// const user = new User('John Doe', 30) as User & CreatedEntify
// const product = new Product('Laptop', 1500) as Product & CreatedEntify;

//6 Call methods
// console.log('User created at:', user.createdAt);
// console.log(user.getUserInfo());

// console.log('Product created at:', product.createdAt);
// product.getProductInfo();