// 假设我们要测试函数 forEach 的内部实现，这个函数为传入的数组中的每个元素调用一次回调函数。
function forEach(items: number[], callback) {
    for (const element of items) {
        callback(element);
    }
}

describe('mock modules', () => {
    test('检查 mock 函数的状态来确保回调函数如期调用', () => {
        const mockCallback = jest.fn(x => 42 + x);
        forEach([0, 1], mockCallback);

        // 此 mock 函数被调用了两次
        expect(mockCallback.mock.calls.length).toBe(2);

        // 第一次调用函数时的第一个参数是 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // 第二次调用函数时的第一个参数是 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

        // 第一次函数调用的返回值是 42
        expect(mockCallback.mock.results[0].value).toBe(42);
    });
});

// 所有的 mock 函数都有个特殊的 .mock 属性，它保存了关于此函数如何被调用、调用时的返回值的信息。 .mock 属性还追踪每次调用时 this的值，所以我们同样可以也检视（inspect） this
describe('mock 属性', () => {
    const myMock1 = jest.fn();
    const a = new myMock1();
    console.log('myMock1.mock.instances:', myMock1.mock.instances);

    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock2.bind(b);
    bound();
});
