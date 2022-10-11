import getSearchObj from 'utils/get-search-obj';

describe('get search object', () => {
    it('获取当前网址的查询参数对象', () => {
        window.location.assign('https://www.seagm.com?platform=web&keywords=d');
        expect(window.location.search).toEqual('?platform=web&keywords=d');
        expect(getSearchObj()).toEqual({
            platform: 'web',
            keywords: 'd',
        });
    });

    it('返回参数wield空', () => {
        window.location.assign('https://www.seagm.com');
        expect(window.location.search).toEqual('');
        expect(getSearchObj()).toEqual({});
    });
});
