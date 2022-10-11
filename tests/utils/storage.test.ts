import storage from '../../src/utils/storage';

describe('storage', () => {
    it('添加缓存', () => {
        storage.set('newKey', 'hello');
        expect(localStorage.getItem('my-app-newKey')).toEqual('hello');
    });

    it('取值', () => {
        localStorage.setItem('my-app-newKey', 'hello');
        expect(localStorage.getItem('my-app-newKey')).toEqual('hello');
    });
});
