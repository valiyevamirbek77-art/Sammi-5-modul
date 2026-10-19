// function MeasureTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.time(` ${propertyKey} vaqti`);
//       const result = originalMethod.apply(this, args);
//       console.timeEnd(` ${propertyKey} vaqti`);
//       return result;
//     };
//   }
  
//   class Calculator {
//     @MeasureTime
//     heavyCalculation(limit: number): number {
//       let sum = 0;
//       for (let i = 0; i < limit; i++) sum += i;
//       return sum;
//     }
//   }
  
//   const calc = new Calculator();
//   calc.heavyCalculation(100000000);