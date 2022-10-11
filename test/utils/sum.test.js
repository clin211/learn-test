const sum = require('../../src/utils/sum');

describe('sum', () => {
    it('加法运算', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});
