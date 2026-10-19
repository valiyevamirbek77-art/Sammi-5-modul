// function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`[LOG]: ${propertyKey} metodi chaqirildi.`);
//         return originalMethod.apply(this, args);
//     };
// }

// function Sealed(constructor: Function) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }

// @Sealed
// class UserService {
//     @Log
//     getUser(id: number) {
//         return { id, name: "Ali" };
//     }
// }