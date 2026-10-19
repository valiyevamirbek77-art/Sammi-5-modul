"use strict";
// function Reportable(constructor: Function) {
//     constructor.prototype.createdDate = new Date();
//   }
//   function WithAdminRole<T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       role = "ADMIN";
//       isAdmin = true;
//     };
//   }
//   @WithAdminRole
//   class Employee {
//     constructor(public name: string) {}
//   }
//   const emp = new Employee("Vali") as any;
//   console.log(emp.name, emp.role);
