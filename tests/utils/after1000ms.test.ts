import after1000ms from 'utils/after1000ms';

describe('after1000ms', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    it('在 1000ms 后自动执行函数', () => {
        jest.spyOn(global, 'setTimeout');
        const callback = jest.fn(); // 生成一个监听函数

        expect(callback).not.toHaveBeenCalled();

        after1000ms(callback);

        jest.runAllTimers(); // 快进时间

        expect(callback).toHaveBeenCalled();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    });
});