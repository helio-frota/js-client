export function partial1(fun: any, arg1: any): (...args: any[]) => any;
export function partial2(fun: any, arg1: any, arg2: any): (...args: any[]) => any;
export function partial3(fun: any, arg1: any, arg2: any, arg3: any): (...args: any[]) => any;
export function pipeline(seed: any, ...args: any[]): any;
export function curry3(fun: any): (thirdArg: any) => (secondArg: any) => (firstArg: any) => any;
export function curry2(fun: any): (secondArg: any) => (firstArg: any) => any;
export function greaterThan(secondArg: any): (firstArg: any) => any;
export function lessThan(secondArg: any): (firstArg: any) => any;
export function lift(answerFun: any, stateFun: any): (...args: any[]) => (state: any) => {
    answer: any;
    state: any;
};
export function actions(acts: any, done: any): (seed: any) => any;
export function condition1(...args: any[]): (fun: any, arg: any) => any;
export function validator(message: any, fun: any): {
    (...args: any[]): any;
    message: any;
};
export function invoker(NAME: any, METHOD: any): (target: any, ...args: any[]) => any;
export function merge(...args: any[]): any;
export function dispatch(...args: any[]): (target: any, ...args: any[]) => any;
export function isa(type: any, action: any): (obj: any) => any;
export function existy(x: any): boolean;
export function cat(...args: any[]): any;
export function construct(head: any, tail: any): any;
export function truthy(x: any): boolean;
