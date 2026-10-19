"use strict";
//1.CreatedAt decorator
function CreatedAt(constructor) {
    return class extends constructor {
        createdAt = new Date();
    };
}
//2.LogMethod decorator
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
}
