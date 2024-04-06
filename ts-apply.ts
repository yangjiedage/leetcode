type MyPartial<T> = {
	[P in keyof T]?: T[P]
}
// -反向，?: 非必需 -?: 必须，readonly 可读 -readonly 可写
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

type MyPick<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}
type MyExtract<T, U> = U extends T ? U : never
type MyExclude<T, E> = T extends E ? never : T;

// extends 判断的意思，左边能不能赋值给右边
// keyof any === string | number | symbol
type MyOmit<T, K extends string | number | symbol> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

interface Person{
  name: string;
  age: number;
  height: number;
}

type omitP = MyOmit<Person, 'name' | 'age'>
type myPick<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}
type pickP = myPick<Person, 'age' | 'height'>

type MyOmit2<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}

type MyRecord<K extends keyof any, V> = {
  [key in K]: V
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any
type MyNonNullable<T> = T extends keyof any ? T : never;

type LastChar<T extends string> = T extends `${infer F}${infer R}` ?
  R extends '' ? F : LastChar<R> : never