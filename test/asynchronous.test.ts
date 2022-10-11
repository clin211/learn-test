/**
 * @description 测试异步代码
 */

function fetchData(isError?: boolean) {
    return new Promise((resolve, reject) => {
        if (isError) {
            reject('error');
        }
        resolve('peanut butter');
    });
}

describe('promise 测试', () => {
    test('返回的数据是peanut butter', () => {
        return fetchData().then(data => {
            expect(data).toBe('peanut butter');
        });
    });
});

describe('async await 测试', () => {
    test('返回的数据是 peanut butter', async () => {
        const data = await fetchData();
        expect(data).toBe('peanut butter');
    });

    test('fetch返回错误', async () => {
        expect.assertions(1);
        try {
            await fetchData(true);
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    test('返回的数据是 peanut butter', async () => {
        await expect(fetchData()).resolves.toBe('peanut butter');
    });

    // 如果期望Promise被Reject，则需要使用 .catch 方法。 请确保添加 expect.assertions 来验证一定数量的断言被调用。 否则，一个fulfilled状态的Promise不会让测试用例失败。
    test('fetch返回错误', async () => {
        await expect(fetchData(true)).rejects.toMatch('error');
    });
});

function fetchDataWithCallback(callback: Function) {
    callback();
}

describe('回调的测试', (done = (data?: any) => data) => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchDataWithCallback(callback);
});
