import { sum } from '../sum';

describe('sum module', () => {
    // 简单的toBe测试
    test('add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // 对象赋值 toEqual 递归检查对象或数组的每个字段; toBe使用 Object.is来进行精准匹配的测试。如果您想要检查对象的值，请使用 toEqual 代替
    test('对象赋值', () => {
        const data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });

    // 相反匹配
    test('adding positive numbers is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });
});
