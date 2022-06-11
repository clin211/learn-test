import objToSearchStr from 'utils/obj-to-search-str';

describe('objToSearchStr', () => {
    it('Object converted to query parameter', () => {
        expect(
            objToSearchStr({
                a: '1',
                b: '2'
            })
        ).toEqual('a=1&b=2');
    });
});
