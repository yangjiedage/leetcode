function foo(a: number) {
	return `${a}1`
}

const aa = {
	name: 'asdf',
	age: 123,
	bar: ['zsdf', 12]
}

type AAType = keyof typeof aa;
type MyReturnType2<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer P ? P : any

type fooParams = MyReturnType2<typeof foo>;

type fooParam2 = ReturnType<string>;
type fooParam3 = MyReturnType2<string>;