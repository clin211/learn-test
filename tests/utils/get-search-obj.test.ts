import getSearchObj from 'utils/get-search-obj';

describe('getSearchObj', () => {
    it('get the parameters of the current data', () => {
        window.location.assign('https://www.baidu.com?a=1&b=2');

        expect(window.location.search).toEqual('?a=1&b=2');
        expect(getSearchObj()).toEqual({
            a: '1',
            b: '2'
        });
    });

    it('return null', () => {
        window.location.assign('https://www.baidu.com');

        expect(window.location.search).toEqual('');
        expect(getSearchObj()).toEqual({});
    });
});
