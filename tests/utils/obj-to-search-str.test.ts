import objToSearchStr from '../../src/utils/obj-to-search-str';
// 把给定的对象转换为查询参数字符串

describe('objToSearchStr', () => {
    it('可以将对象转化为查询参数字符串', () => {
        expect(
            objToSearchStr({
                platform: 'web',
                keywords: 'd',
            })
        ).toEqual('platform=web&keywords=d');
    });
});
