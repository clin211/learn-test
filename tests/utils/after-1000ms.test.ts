import after1000ms from 'utils/after-1000ms';

describe('after1000ms', () => {
    jest.spyOn(global, 'setTimeout');
    const callback = jest.fn();

    expect(callback).not.toHaveBeenCalled();

    after1000ms(callback);

    // 用 jest.runAllTimers 快进时间，最后来判断 callback 是否只被调用了 1 次
    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
});
