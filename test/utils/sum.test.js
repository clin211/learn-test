const sum = require('../../src/utils/sum');

describe('sum file', () => {
    it('sum', () => {
        expect(sum(1, 1)).toEqual(2);
    });
});
