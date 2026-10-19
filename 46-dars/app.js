"use strict";
// function CreatedAt(constructor: Function) {
//     constructor.prototype.createdAt = new Date();
//   }
//   function WithCreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       createdAt = new Date();
//     };
//   }
//   @WithCreatedAt
//   class UserAccount {
//     constructor(public username: string) {}
//   }
//   const user = new UserAccount("Ali") as any;
//   console.log(user.username, user.createdAt);
