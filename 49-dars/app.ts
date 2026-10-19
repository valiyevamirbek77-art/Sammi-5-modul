// // Metod natijasini keshlovchi dekorator
// function Cache() {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       const originalMethod = descriptor.value;
//       const cache = new Map<string, any>();
  
//       descriptor.value = function (...args: any[]) {
//         const key = JSON.stringify(args);
        
//         if (cache.has(key)) {
//           console.log(` [CACHE]: ${propertyKey} natijasi keshdan olindi.`);
//           return cache.get(key);
//         }
  
//         console.log(` [COMPUTE]: ${propertyKey} hisoblanmoqda...`);
//         const result = originalMethod.apply(this, args);
//         cache.set(key, result);
//         return result;
//       };
//     };
//   }
  
//   class ExpensiveService {
//     @Cache()
//     heavyCalculation(n: number): number {
//       let sum = 0;
//       for (let i = 0; i < n; i++) {
//         sum += i;
//       }
//       return sum;
//     }
//   }
  
//   const service = new ExpensiveService();
//   console.log(service.heavyCalculation(50000000)); // Hisoblaydi
//   console.log(service.heavyCalculation(50000000)); // Keshdan oladi (darhol ishlaydi)