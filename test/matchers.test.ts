// 代码中的undefined, null, and false有不同含义，若你在测试时不想区分他们，可以用真值判断。 Jest提供helpers供你使用。
describe('真假值判断', () => {
    test('null值判断', () => {
        const n = null;
        expect(n).toBeNull(); // toBeNull 只匹配 null
        expect(n).toBeDefined(); // toBeDefined 与 toBeUndefined 相反, 只匹配不是undefined; 与下一个相同
        expect(n).not.toBeUndefined(); // toBeUndefined 只匹配 undefined; 加上前面的not则表示只匹配不为undefined
        expect(n).not.toBeTruthy(); // toBeTruthy 匹配任何 if 语句为真
        expect(n).toBeFalsy(); // toBeFalsy 匹配任何 if 语句为假
    });

    test('零值判断', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
});

describe('数字', () => {
    test('数值计算匹配', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3); // 使用toBeGreaterThan来比较实际结果 > 预期的数字; 3为预期的值
        expect(value).toBeGreaterThanOrEqual(3.5); // 使用toBeGreaterThan来比较实际结果 >= 预期的数字; 3.5为预期的值
        expect(value).toBeLessThan(5); // 使用toBeLessThan来比较实际结果 < 预期的数字; 5为预期值
        expect(value).toBeLessThanOrEqual(4.5); // 使用toBeLessThan来比较实际结果 <= 预期的数字; 4.5为预期值

        // toBe和toEqual在数字上是相等的
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

    test('两个浮点数相加', () => {
        const value = 1.1 + 1.2;
        // 因为浮点数有计算精度问题, 使用toBe会不通过, 所以使用toBeCloseTo
        expect(value).toBeCloseTo(2.3);
    });
});

describe('字符串', () => {
    test('字符串中没有 I 字符', () => {
        expect('team').not.toMatch(/I/); // toMatch 正则表达式的字符串
    });

    test('Christoph 中有 "stop"', () => {
        expect('Christoph').toMatch(/stop/);
    });
});

describe('数组和可迭代对象', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];

    test('shoppingList数组中包含milk, 通过 toContain来检查一个数组或可迭代对象是否包含某个特定项', () => {
        expect(shoppingList).toContain('milk');
        // 去重后查找是否存在
        expect(new Set(shoppingList)).toContain('milk');
    });
});

describe('测试函数在调用时抛出某个异常错误', () => {
    function compileAndroidCode() {
        throw new Error('you are using the wrong JDK');
    }

    test('compiling android goes as expected', () => {
        expect(() => compileAndroidCode()).toThrow();
        expect(() => compileAndroidCode()).toThrowError(Error);

        // 你可以自己定义确切的错误消息内容或者使用正则表达式
        expect(() => compileAndroidCode()).toThrow(
            'you are using the wrong JDK'
        );
        expect(() => compileAndroidCode()).toThrow(/JDK/);
    });
});
